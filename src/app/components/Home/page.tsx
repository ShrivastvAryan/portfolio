"use client";

import Marquee from "react-fast-marquee";


export default function PortfolioHero() {
  return (
    <main
      className="relative min-h-[760px] md:min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/bg-image.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 min-h-[760px] md:min-h-screen px-6 md:px-12 py-8 flex flex-col justify-between">
        {/* TOP SECTION: BIG NAME + NAVIGATION */}
        <div>
          {/* BIG NAME */}
          <div className="flex flex-col">
            <div className="flex justify-center gap-x-8 items-center">
              <h1
                className="
                  font-[family-name:var(--font-ubuntu)]
                  font-bold
                  uppercase
                  tracking-[-0.02em]
                  leading-none
                  text-[16vw]
                  md:text-[15vw]
                  lg:text-[14vw]
                "
              >
                ARYAN
              </h1>

              <div className="bg-white h-[9vw] w-[18vw] rounded-full my-auto" />
            </div>

            <div className="relative -mt-[2vw] lg:-mt-[3vw]">
              <h1
                className="
                  font-[family-name:var(--font-ubuntu)]
                  font-bold
                  text-center
                  uppercase
                  tracking-[-0.02em]
                  leading-none
                  text-[16vw]
                  md:text-[15vw]
                  lg:text-[14vw]
                "
              >
                SHRIVASTAVA
              </h1>

              {/* PROFILE IMAGE */}
              <div
                className="
                  absolute
                  left-[37%]
                  top-[8%]
                  w-[25%]
                  h-[75%]
                  overflow-hidden
                  rounded-full
                "
              >
                <img
                  src="/profile.png"
                  alt="Aryan"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="mt-8 flex justify-end gap-8 md:gap-12 pr-2">
            <a
              href="#about"
              className="cursor-target text-lg md:text-2xl font-medium hover:opacity-60 transition-opacity"
            >
              ABOUT
            </a>

            <a
              href="#contact"
              className="cursor-target text-lg md:text-2xl font-medium hover:opacity-60 transition-opacity"
            >
              CONTACT ME
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target text-lg md:text-2xl font-medium hover:opacity-60 transition-opacity"
            >
              RESUME
            </a>
          </nav>
        </div>

        {/* BOTTOM SECTION: INTRO + SINGLE ROW TECH STACK MARQUEE */}
        <div className="pt-12 pb-4 w-full">
          <p
            className="
              text-xl
              md:text-3xl
              lg:text-[2rem]
              font-medium
              leading-[1.1]
              tracking-[-0.03em]
              max-w-3xl
            "
          >
            I&apos;m a software developer, crafting effortless user
            experiences across web and app, for the past 3 years.
          </p>

      
        </div>
      </div>
    </main>
  );
}