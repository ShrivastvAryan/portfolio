"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const aryanRef = useRef<HTMLDivElement>(null);
  const shrivastavaRef = useRef<HTMLDivElement>(null);
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
      className="relative min-h-[250px] md:min-h-[450px] lg:min-h-[800px] 2xl:max-h-[1800px] w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/bg-image.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative min-h-[250px] md:min-h-[450px] lg:min-h-[800px] 2xl:max-h-[1800px] z-10 lg:px-12 lg:py-8 flex flex-col items-center justify-center lg:justify-between">
        <h1 className="sr-only">
          Aryan Shrivastava, Software Developer and Full-Stack Web Developer
        </h1>
        {/* TOP SECTION */}
        <div>
          {/* BIG NAME */}
          <div className="flex flex-col overflow-hidden">
            <div className="flex justify-center gap-x-3 sm:gap-x-6 md:gap-x-8 items-center overflow-hidden">
              <div
                ref={aryanRef}
                className="font-[family-name:var(--font-ubuntu)] font-bold uppercase tracking-[-0.02em] leading-none text-[13vw] sm:text-[13vw] lg:text-[14vw]"
              >
                ARYAN
              </div>
              <div
                ref={pillRef}
                className="bg-white h-[10vw] w-[20vw] sm:h-[9vw] sm:w-[18vw] rounded-full my-auto shrink-0"
              />
            </div>

            <div className="relative -mt-[2vw] lg:-mt-[3vw] overflow-hidden">
              <div
                ref={shrivastavaRef}
                className="font-[family-name:var(--font-ubuntu)] font-bold text-center uppercase tracking-[-0.02em] leading-none text-[13vw] sm:text-[13vw] lg:text-[14vw]"
              >
                SHRIVASTAVA
              </div>

              {/* PROFILE IMAGE — hidden on small mobile, visible md+ */}
            </div>
          </div>

          {/* NAVIGATION */}
          <nav ref={navRef} className="mt-4 sm:mt-8 flex text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium justify-center lg:justify-end gap-4 sm:gap-8 md:gap-12 pr-1 sm:pr-2 flex-wrap">
            <Link
              href="/about"
              className="cursor-target hover:opacity-60 transition-opacity"
            >
              ABOUT
            </Link>
           <a
              href="mailto:me@aryanshrivastava.dev"
              className="cursor-target hover:opacity-60 transition-opacity"
            >
              CONTACT ME
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target  hover:opacity-60 transition-opacity"
            >
              RESUME
            </a>
          </nav>
        </div>

        {/* BOTTOM SECTION */}
        <div className=" 2xl:pt-[2vw] pb-4 w-full">
          <p
            ref={introRef}
            className="text-base hidden lg:text-[2.5rem] lg:block font-medium leading-[1.2] tracking-[-0.03em] max-w-3xl"
          >
            I&apos;m a software developer, crafting effortless user experiences
            across web and app.
          </p>
        </div>
      </div>
    </main>
  );
}
