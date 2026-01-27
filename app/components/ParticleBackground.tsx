'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    particleground: (element: HTMLElement, options?: any) => any;
  }
}

const StyledParticleContainer = styled.div`
  position: fixed;
  right: -50%;
  top: -60%;
  width: 250%;
  height: 150%;
  transform: scale3d(0.5, 0.5, 1);
  transform-origin: right center;
  z-index: 1;
  pointer-events: none;
`;

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    // Check if script is already loaded
    if (window.particleground && containerRef.current) {
      // Initialize immediately if already loaded
      instanceRef.current = window.particleground(containerRef.current, {
        dotColor: 'rgba(255, 255, 255, 1)',
        lineColor: 'rgba(255, 255, 255, 0.05)',
        minSpeedX: 0.3,
        maxSpeedX: 0.6,
        minSpeedY: 0.3,
        maxSpeedY: 0.6,
        density: 50000, // One particle every n pixels
        curvedLines: false,
        proximity: 250, // How close two dots need to be before they join
        parallaxMultiplier: 10, // Lower the number is more extreme parallax
        particleRadius: 4, // Dot size
      });
      return () => {
        if (instanceRef.current && typeof instanceRef.current.destroy === 'function') {
          instanceRef.current.destroy();
        }
      };
    }

    // Load the particleground script if not already loaded
    const existingScript = document.querySelector('script[src="/scripts/particleground.js"]');
    if (existingScript) {
      // Script already exists, check if it's loaded or wait for it
      if (window.particleground && containerRef.current) {
        // Script is already loaded, initialize immediately
        instanceRef.current = window.particleground(containerRef.current, {
          dotColor: 'rgba(255, 255, 255, 1)',
          lineColor: 'rgba(255, 255, 255, 0.05)',
          minSpeedX: 0.3,
          maxSpeedX: 0.6,
          minSpeedY: 0.3,
          maxSpeedY: 0.6,
          density: 50000,
          curvedLines: false,
          proximity: 250,
          parallaxMultiplier: 10,
          particleRadius: 4,
        });
      } else {
        // Script exists but not loaded yet, wait for it
        existingScript.addEventListener('load', () => {
          if (containerRef.current && window.particleground) {
            instanceRef.current = window.particleground(containerRef.current, {
              dotColor: 'rgba(255, 255, 255, 1)',
              lineColor: 'rgba(255, 255, 255, 0.05)',
              minSpeedX: 0.3,
              maxSpeedX: 0.6,
              minSpeedY: 0.3,
              maxSpeedY: 0.6,
              density: 50000,
              curvedLines: false,
              proximity: 250,
              parallaxMultiplier: 10,
              particleRadius: 4,
            });
          }
        });
      }
      return () => {
        if (instanceRef.current && typeof instanceRef.current.destroy === 'function') {
          instanceRef.current.destroy();
        }
      };
    }

    const script = document.createElement('script');
    script.src = '/scripts/particleground.js';
    script.async = true;

    script.onload = () => {
      if (containerRef.current && window.particleground) {
        // Initialize particleground with similar settings to aeon theme
        instanceRef.current = window.particleground(containerRef.current, {
          dotColor: 'rgba(255, 255, 255, 1)',
          lineColor: 'rgba(255, 255, 255, 0.05)',
          minSpeedX: 0.3,
          maxSpeedX: 0.6,
          minSpeedY: 0.3,
          maxSpeedY: 0.6,
          density: 50000, // One particle every n pixels
          curvedLines: false,
          proximity: 250, // How close two dots need to be before they join
          parallaxMultiplier: 10, // Lower the number is more extreme parallax
          particleRadius: 4, // Dot size
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: destroy the particle instance
      if (instanceRef.current && typeof instanceRef.current.destroy === 'function') {
        instanceRef.current.destroy();
      }
      // Don't remove the script as it might be used by other instances
    };
  }, []);

  return (
    <StyledParticleContainer
      ref={containerRef}
      id="particles-foreground"
    />
  );
}
