"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const aryanRef = useRef<HTMLHeadingElement>(null);
  const shrivastavaRef = useRef<HTMLHeadingElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Nav slides down
      tl.fromTo(
        navRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0
      );

      // "ARYAN" letters slam in from top
      tl.fromTo(
        aryanRef.current,
        { y: "-120%", opacity: 0, skewY: -6 },
        { y: "0%", opacity: 1, skewY: 0, duration: 1 },
        0.15
      );

      // Pill punches in
      tl.fromTo(
        pillRef.current,
        { scaleX: 0, opacity: 0, transformOrigin: "left center" },
        { scaleX: 1, opacity: 1, duration: 0.7, ease: "expo.out" },
        0.35
      );

      // "SHRIVASTAVA" rises from bottom
      tl.fromTo(
        shrivastavaRef.current,
        { y: "120%", opacity: 0, skewY: 6 },
        { y: "0%", opacity: 1, skewY: 0, duration: 1 },
        0.3
      );

      // Profile image scales + fades in
      tl.fromTo(
        profileRef.current,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "back.out(1.4)" },
        0.55
      );

      // Intro text fades up
      tl.fromTo(
        introRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.75
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/bg-image.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 min-h-screen px-4 sm:px-6 md:px-12 py-6 sm:py-8 flex flex-col justify-between">
        {/* TOP SECTION */}
        <div>
          {/* BIG NAME */}
          <div className="flex flex-col overflow-hidden">
            <div className="flex justify-center gap-x-3 sm:gap-x-6 md:gap-x-8 items-center overflow-hidden">
              <h1
                ref={aryanRef}
                className="font-[family-name:var(--font-ubuntu)] font-bold uppercase tracking-[-0.02em] leading-none text-[17vw] sm:text-[16vw] md:text-[15vw] lg:text-[14vw]"
              >
                ARYAN
              </h1>
              <div
                ref={pillRef}
                className="bg-white h-[10vw] w-[20vw] sm:h-[9vw] sm:w-[18vw] rounded-full my-auto shrink-0"
              />
            </div>

            <div className="relative -mt-[2vw] lg:-mt-[3vw] overflow-hidden">
              <h1
                ref={shrivastavaRef}
                className="font-[family-name:var(--font-ubuntu)] font-bold text-center uppercase tracking-[-0.02em] leading-none text-[17vw] sm:text-[16vw] md:text-[15vw] lg:text-[14vw]"
              >
                SHRIVASTAVA
              </h1>

              {/* PROFILE IMAGE — hidden on small mobile, visible md+ */}
              <div
                ref={profileRef}
                className="hidden sm:block absolute left-[37%] top-[8%] w-[25%] h-[75%] overflow-hidden rounded-full"
              >
                <img
                  src="/profile.png"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav ref={navRef} className="mt-4 sm:mt-8 flex justify-end gap-4 sm:gap-8 md:gap-12 pr-1 sm:pr-2 flex-wrap">
            <a
              href="#about"
              className="cursor-target text-sm sm:text-lg md:text-2xl font-medium hover:opacity-60 transition-opacity"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="cursor-target text-sm sm:text-lg md:text-2xl font-medium hover:opacity-60 transition-opacity"
            >
              CONTACT ME
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target text-sm sm:text-lg md:text-2xl font-medium hover:opacity-60 transition-opacity"
            >
              RESUME
            </a>
          </nav>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 sm:pt-12 pb-4 w-full">
          <p
            ref={introRef}
            className="text-base sm:text-xl md:text-3xl lg:text-[2rem] font-medium leading-[1.2] tracking-[-0.03em] max-w-3xl"
          >
            I&apos;m a software developer, crafting effortless user experiences
            across web and app.
          </p>
        </div>
      </div>
    </main>
  );
}
