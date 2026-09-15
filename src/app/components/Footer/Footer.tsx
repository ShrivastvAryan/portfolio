"use client";

import React from "react";

export default function Footer() {
  const navItems = [
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/aryanshrivastava290605/",
    },
    {
      label: "GITHUB",
      href: "https://github.com/ShrivastvAryan",
    },
    {
      label: "LEETCODE",
      href: "https://leetcode.com/u/ShrivastvAryan/",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat text-black min-h-[480px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex flex-col justify-end px-6 sm:px-10 md:px-14 lg:px-20 pb-8 sm:pb-12 md:pb-16 pt-32 sm:pt-44 md:pt-52"
      style={{
        backgroundImage: "url('/footer.png')",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-end space-y-6 md:space-y-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-black">
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

        {/* Big HIRE ME Headline + Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8">
          <h2 className="font-[family-name:var(--font-ubuntu)] font-black tracking-tight text-6xl sm:text-7xl md:text-8xl text-black leading-none select-none">
            me@aryanshrivastava.dev
          </h2>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0 pb-1 sm:pb-2">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target px-7 sm:px-9 py-3 sm:py-3.5 bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors inline-block text-center shadow-sm"
            >
              RESUME
            </a>

            <a
              href="mailto:me@aryanshrivastava.dev"
              className="cursor-target px-7 sm:px-9 py-3 sm:py-3.5 border border-black text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-black hover:text-white transition-all inline-block text-center shadow-sm"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}