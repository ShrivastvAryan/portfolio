"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import Marquee from "react-fast-marquee";
import { techStack, TechBadge } from "./techStackData";

interface ProjectItem {
  id: number;
  category: "PROFESSIONAL" | "SIDE PROJECTS";
  title: string;
  headline: string;
  description: string;
  stack: string[];
  stats: { value: string; label: string }[];
  image: string;
  link: string;
}

const allProjects: ProjectItem[] = [
  {
    id: 1,
    category: "PROFESSIONAL",
    title: "DashX Payments",
    headline: "Engineered Web3 frontend systems with high-performance API integrations",
    description:
      "Led end-to-end implementation of Web3 on-ramp and off-ramp transaction flows, optimizing usability, conversion rates, and cross-border payment orchestration.",
    stack: ["Next.js", "TypeScript", "Web3", "JWT", "TanStack",],
    stats: [
      { value: "99.9%", label: "TRANSACTION SUCCESS" },
      { value: "3X", label: "SPEED BOOST" },
    ],
    image: "/dashx-1.png",
    link: "https://dashx.xyz/",
  },
  {
    id: 2,
    category: "PROFESSIONAL",
    title: "CONSCIOUS",
    headline: "Full-stack e-commerce experience showcasing handicrafts & cultural products",
    description:
      "A full-stack web application designed and developed from scratch to present handcrafted products. Built clean, maintainable interfaces with Next.js, Express.js, and MongoDB.",
    stack: ["Express.js", "REST APIs", "Mongoose", "Next.js"],
    stats: [
      { value: "10+", label: "DELIVERABLES" },
      { value: "100%", label: "RESPONSIVE UI" },
    ],
    image: "/concious-1.png",
    link: "https://github.com/ShrivastvAryan/mvp",
  },
  {
    id: 3,
    category: "SIDE PROJECTS",
    title: "DIGIMENU",
    headline: "Mobile-first QR digital menu platform simplifying restaurant dining",
    description:
      "DigiMenu is a smart digital menu platform designed to streamline restaurant ordering operations, reduce server bottlenecks, and enhance customer experience.",
    stack: ["Next.js", "Express.js", "Mongoose", "REST APIs"],
    stats: [
      { value: "50ms", label: "RESPONSE TIME" },
      { value: "2.5X", label: "ORDER EFFICIENCY" },
    ],
    image: "/digimenu-1.jpeg",
    link: "https://github.com/ShrivastvAryan/Vendor-Menu",
  },
  {
    id: 4,
    category: "SIDE PROJECTS",
    title: "CLICK2SPONSOR",
    headline: "Automate sponsor discovery and outreach with a single click",
    description:
      "Built end-to-end backend workflow automation to find potential event sponsors and automate mass customized outreach with Nodemailer and Express.",
    stack: ["Express.js", "Nodemailer", "Mongoose", "MongoDB"],
    stats: [
      { value: "1-CLICK", label: "OUTREACH" },
      { value: "500+", label: "SPONSORS INDEXED" },
    ],
    image: "/click2-1.jpeg",
    link: "https://github.com/ShrivastvAryan/Sponsor",
  },
];

export default function PortfolioCarousel() {
  const [activeTab, setActiveTab] = useState<"ALL" | "PROFESSIONAL" | "SIDE PROJECTS">("ALL");

  const filteredProjects =
    activeTab === "ALL"
      ? allProjects
      : allProjects.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="bg-[#0B0B0B] text-white py-12 px-6 md:px-12 lg:px-20 font-sans border-t border-white/5"
    >
          <div className="mt-6 md:mt-8 w-full overflow-hidden">
            <Marquee pauseOnHover autoFill speed={35} gradient={false}>
              {techStack.map((tech) => (
                <TechBadge key={tech.name} tech={tech} />
              ))}
            </Marquee>
          </div>
          
      <div className="max-w-7xl mx-auto pt-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-20">
          <ScrollReveal>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-ubuntu)] leading-[0.88]">
              FEATURED<br />WORK
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md lg:max-w-lg font-normal">
              Good design and engineering get out of the way — functional,
              intentional, and built around real people. Here is how I
              approached each project below.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Tabs */}
        {/* <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {(["ALL", "PROFESSIONAL", "SIDE PROJECTS"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-target px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-black shadow-md scale-105"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </ScrollReveal> */}

        {/* Projects List */}
        <div className="space-y-16 sm:space-y-24">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-white/15 transition-all duration-500">
                {/* Left: Project Preview Image */}
                <div className="lg:col-span-6 w-full">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target block group relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 text-white">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Right: Content & Impact */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full py-2">
                  <div>
                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white font-[family-name:var(--font-ubuntu)]">
                      {project.title}
                    </h3>

                    {/* Headline */}
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white/90">
                      {project.headline}
                    </p>

                    {/* Description */}
                    <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-gray-400 leading-relaxed font-normal max-w-xl">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="cursor-target px-3 py-1 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10 hover:border-white/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Metrics & See More Action */}
                  <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex items-end justify-between gap-4">
                    {/* Stats */}
                    <div className="flex items-center gap-6 sm:gap-10">
                      {project.stats.map((stat, sIdx) => (
                        <div key={sIdx}>
                          <span className="block text-2xl sm:text-3xl font-black text-white font-[family-name:var(--font-ubuntu)] leading-none">
                            {stat.value}
                          </span>
                          <span className="block text-[10px] sm:text-xs font-semibold tracking-wider text-gray-400 uppercase mt-1">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action */}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider text-white uppercase hover:text-gray-300 transition-colors"
                    >
                      SEE MORE <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA to GitHub */}
        <div className="mt-16 sm:mt-24 text-center">
          <Link
            href="https://github.com/ShrivastvAryan"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target inline-flex items-center gap-2 font-bold text-xs sm:text-sm uppercase tracking-wider bg-white text-black px-8 py-3.5 rounded-full hover:bg-gray-200 transition-all shadow-md active:scale-95"
          >
            <span>VIEW MORE ON GITHUB</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}