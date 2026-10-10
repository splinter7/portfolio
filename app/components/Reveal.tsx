"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

interface RevealProps {
  children: ReactNode;
  /** stagger delay in milliseconds */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Tasteful scroll-reveal wrapper: fades content up once as it enters the
 * viewport, then stays visible.
 *
 * Fail-open by design:
 * - Server render and first client paint are fully visible (no flash of
 *   hidden content, no hydration mismatch).
 * - Content only hides once JS is confirmed running.
 * - If IntersectionObserver is unavailable or the user prefers reduced
 *   motion, content reveals immediately with no animation.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [jsRunning, setJsRunning] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setJsRunning(true);
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = jsRunning && !visible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(20px)" : "translateY(0)",
        transition: `opacity 700ms ${EASE} ${delay}ms, transform 700ms ${EASE} ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
