"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** "slide" (default) | "fade" | "clip" */
  variant?: "slide" | "fade" | "clip";
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "slide",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars =
      variant === "clip"
        ? { clipPath: "inset(0 0 100% 0)", opacity: 0, y: 30 }
        : variant === "fade"
        ? { opacity: 0 }
        : { opacity: 0, y: 60 };

    const toVars: gsap.TweenVars =
      variant === "clip"
        ? { clipPath: "inset(0 0 0% 0)", opacity: 1, y: 0 }
        : variant === "fade"
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

    gsap.fromTo(el, fromVars, {
      ...toVars,
      duration: 0.85,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === el) st.kill();
      });
    };
  }, [delay, variant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
