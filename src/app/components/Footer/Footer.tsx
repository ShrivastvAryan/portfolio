"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { label: "X", href: "https://x.com/ShrivastvAryan" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/aryanshrivastava290605/" },
    { label: "GITHUB", href: "https://github.com/ShrivastvAryan" },
    { label: "LEETCODE", href: "https://leetcode.com/u/ShrivastvAryan/" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big heading rises from below
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0, skewY: 3 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Nav links stagger in
      if (navRef.current) {
        const links = navRef.current.querySelectorAll("a");
        gsap.fromTo(
          links,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: navRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat min-h-[380px] sm:min-h-[480px] md:min-h-[580px] lg:min-h-[600px] p-6 sm:p-8 flex flex-col justify-end"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="w-full mx-auto flex flex-col justify-end">
        {/* Heading — vw-based so it never overflows */}
        <h1
          ref={headingRef}
          className="font-[family-name:var(--font-ubuntu)] font-extrabold text-center text-white uppercase tracking-tight leading-none"
          style={{ fontSize: "clamp(2rem, 9.5vw, 11rem)" }}
        >
          <span className="block">LET&apos;S CONNECT</span>
          <span className="block">:)</span>
        </h1>

        {/* Navigation Links */}
        <nav
          ref={navRef}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 text-white pt-6 sm:pt-8 pb-2 text-xs sm:text-sm md:text-xl lg:text-2xl font-bold uppercase tracking-wider"
        >
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target hover:opacity-60 transition-opacity"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}