"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

interface ExperienceItem {
  company: string;
  period: string;
  position: string;
  description: string;
  link?: string;
  linkText?: string;
}

interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  description: string;
  link?: string;
  linkText?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "DashX",
    period: "2025 - Present",
    position: "Full Stack Developer · Internship",
    description:
      "Engineered Web3-enabled frontend systems with scalable, high-performance API integrations. Led end-to-end implementation of on-ramp and off-ramp transaction flows, optimizing usability, cross-border payments, and conversion.",
    link: "https://dashx.xyz/",
    linkText: "SEE MORE",
  },
  {
    company: "Freelancing",
    period: "2025 - Present",
    position: "Full Stack Developer",
    description:
      "Developed responsive, high-performance websites for clients using Next.js, Tailwind CSS, and REST APIs. Built clean, maintainable interfaces with a focus on responsiveness, performance, and user satisfaction.",
    link: "https://github.com/ShrivastvAryan",
    linkText: "SEE MORE",
  },
  {
    company: "GeekRoom",
    period: "2025 - 2026",
    position: "Core Member",
    description:
      "Organized and managed hackathons, handling end-to-end coordination and execution. Contributed to the development of hackathon websites, improving user experience and mentoring participants with technical guidance.",
    link: "https://www.linkedin.com/in/aryanshrivastava290605/",
    linkText: "SEE MORE",
  },
];

const educationList: EducationItem[] = [
  {
    degree: "BACHELORS IN TECHNOLOGY (DS-AI)",
    period: "2024 — 2028",
    institution:
      "Guru Gobind Singh Indraprastha University",
    description:
      "Pursuing a 4-year degree in Data Science & Artificial Intelligence with a GPA of 8.5, actively contributing as a Core Member in Geek Room.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0B0B0B] text-white py-20 md:py-32 px-6 md:px-12 lg:px-20 font-sans border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-36">
        {/* ================= EXPERIENCE SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: EXPERIENCE Heading & Dot */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <ScrollReveal>
              <div className="flex items-center justify-between lg:block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-[family-name:var(--font-ubuntu)] leading-none">
                  EXPERIENCE
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Experience Items */}
          <div className="lg:col-span-8 space-y-12 md:space-y-14">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group pb-10 border-b border-white/10 last:border-b-0 last:pb-0">
                  {/* Header Row: Company + Period */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white font-[family-name:var(--font-ubuntu)]">
                      {exp.company}
                    </h3>
                    <span className="text-sm md:text-base text-gray-400 font-normal">
                      {exp.period}
                    </span>
                  </div>

                  {/* Position / Role */}
                  <p className="mt-2 text-base md:text-lg font-medium text-white/90">
                    {exp.position}
                  </p>

                  {/* Description & See More action */}
                  <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl font-normal">
                      {exp.description}
                    </p>

                    {exp.link && (
                      <div className="shrink-0 md:self-end">
                        <Link
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-target inline-flex items-center gap-1 text-xs md:text-sm font-bold tracking-wider text-white uppercase hover:text-gray-300 transition-colors"
                        >
                          {exp.linkText || "SEE MORE"}{" "}
                          <ArrowUpRight className="w-4 h-4 ml-0.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ================= EDUCATION SECTION ================= */}
        <div id="education" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-16 md:pt-24 border-t border-white/10">
          {/* Left Column: EDUCATION Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <ScrollReveal>
              <div className="flex items-center justify-between lg:block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-[family-name:var(--font-ubuntu)] leading-none">
                  EDUCATION
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Education Items */}
          <div className="lg:col-span-8 space-y-12 md:space-y-14">
            {educationList.map((edu, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group pb-10 border-b border-white/10 last:border-b-0 last:pb-0">
                  {/* Header Row: Degree + Period */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white font-[family-name:var(--font-ubuntu)]">
                      {edu.degree}
                    </h3>
                    <span className="text-sm md:text-base text-gray-400 font-normal">
                      {edu.period}
                    </span>
                  </div>

                  {/* Institution */}
                  <p className="mt-2 text-base md:text-lg font-medium text-white/90">
                    {edu.institution}
                  </p>

                  {/* Description */}
                  <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl font-normal">
                      {edu.description}
                    </p>

                    {edu.link && (
                      <div className="shrink-0 md:self-end">
                        <Link
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-target inline-flex items-center gap-1 text-xs md:text-sm font-bold tracking-wider text-white uppercase hover:text-gray-300 transition-colors"
                        >
                          {edu.linkText || "SEE MORE"}{" "}
                          <ArrowUpRight className="w-4 h-4 ml-0.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}