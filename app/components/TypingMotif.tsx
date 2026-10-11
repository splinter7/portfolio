"use client";

import { useEffect, useState } from "react";
import {
  StyledTypingCursor,
  StyledTypingMotif,
  StyledTypingPrompt,
} from "./styled/PageStyles";

const FULL_TEXT = "whoami";

type Phase = "idle" | "typing" | "pausing" | "deleting" | "resting";

// Decorative hero motif: a terminal prompt that types "whoami" on a slow
// loop, ending in a blinking block cursor. The hero content below answers it.
// Static full text when the user prefers reduced motion.
export default function TypingMotif() {
  const [len, setLen] = useState(FULL_TEXT.length);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLen(0);
    setPhase("typing");
  }, []);

  useEffect(() => {
    if (phase === "idle") return;
    let timer: number;
    if (phase === "typing") {
      timer = window.setTimeout(() => {
        if (len < FULL_TEXT.length) setLen(len + 1);
        else setPhase("pausing");
      }, 120);
    } else if (phase === "pausing") {
      timer = window.setTimeout(() => setPhase("deleting"), 2400);
    } else if (phase === "deleting") {
      timer = window.setTimeout(() => {
        if (len > 0) setLen(len - 1);
        else setPhase("resting");
      }, 50);
    } else {
      timer = window.setTimeout(() => setPhase("typing"), 800);
    }
    return () => clearTimeout(timer);
  }, [phase, len]);

  return (
    <StyledTypingMotif aria-hidden="true">
      <StyledTypingPrompt>❯</StyledTypingPrompt>
      {FULL_TEXT.slice(0, len)}
      <StyledTypingCursor />
    </StyledTypingMotif>
  );
}
