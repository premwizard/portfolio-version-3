'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}

export function useVantaClouds(containerRef: React.RefObject<HTMLDivElement | null>) {
  const vantaEffectRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let isMounted = true;

    const loadScripts = async () => {
      try {
        // Load Three.js if not already present
        if (!window.THREE) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // Load Vanta CLOUDS script if not present
        if (!window.VANTA || !window.VANTA.CLOUDS) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        if (isMounted && containerRef.current && window.VANTA && window.VANTA.CLOUDS) {
          // Initialize Vanta CLOUDS effect with new Carbon Black & Dusty Mauve theme color scheme
          vantaEffectRef.current = window.VANTA.CLOUDS({
            el: containerRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: 0x1C1D21,        // Carbon Black #1C1D21
            cloudColor: 0x2A2B30,      // Subtle dark cloud variation
            cloudShadowColor: 0x141518,
            sunColor: 0xA288A6,        // Dusty Mauve #A288A6
            sunGlareColor: 0xBB9BB0,   // Lilac Ash #BB9BB0
            sunlightColor: 0xF1E3E4,   // Lavender Blush #F1E3E4
            speed: 0.8,
          });
          setIsLoaded(true);
        }
      } catch (err) {
        console.warn('Vanta CLOUDS failed to initialize:', err);
      }
    };

    loadScripts();

    // Pause animation when window tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (vantaEffectRef.current && vantaEffectRef.current.pause) {
          vantaEffectRef.current.pause();
        }
      } else {
        if (vantaEffectRef.current && vantaEffectRef.current.resume) {
          vantaEffectRef.current.resume();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isMounted = false;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (vantaEffectRef.current) {
        if (typeof vantaEffectRef.current.destroy === 'function') {
          vantaEffectRef.current.destroy();
        }
        vantaEffectRef.current = null;
      }
    };
  }, [containerRef]);

  return { isLoaded };
}
