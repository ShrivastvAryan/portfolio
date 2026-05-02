"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowUpRight, ArrowRight, Diamond, Briefcase, Rocket } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const professionalProjects = [
  {
    id: 1,
    title: "DashX (Internship)",
    link: "https://dashx.xyz/",
    role: "Full Stack Development",
    description: "Built and scaled Web3-enabled frontend systems with robust API integrations.",
    stack: "Next.js, TypeScript, API Handling, JWT, Tanstack, State Management, Web3",
    screenshots: ["/dashx-1.png", "/dashx-2.png", "/dashx-3.png"],
  },
  {
    id: 2,
    title: "Conscious (Freelancing)",
    link: "https://github.com/ShrivastvAryan/mvp",
    role: "Full Stack Development",
    description: "A full-stack web application designed and developed to showcase handicrafts and cultural products.",
    stack: "Express.js, REST APIs, Mongoose, JWT, Tanstack",
    screenshots: ["/concious-1.png", "/concious-2.png", "/concious-3.png"],
  },
];

const sideProjects = [
  {
    id: 1,
    title: "DigiMenu",
    link: "https://github.com/ShrivastvAryan/Vendor-Menu",
    role: "Full Stack Development",
    description: "DigiMenu is a smart, mobile-friendly digital menu platform designed to simplify restaurant operations and enhance customer experience.",
    stack: "Express.js, REST APIs, Next.js, Mongoose, Tanstack, JWT",
    screenshots: ["/digimenu-1.jpeg", "/digimenu-2.jpeg", "/digimenu-3.jpeg"],
  },
  {
    id: 2,
    title: "click2sponsor",
    link: "https://github.com/ShrivastvAryan/Sponsor",
    role: "Backend Development",
    description: "click2sponsor — the ultimate platform that helps you discover potential sponsors and email them all with a single click.",
    stack: "Express.js, REST APIs, Mongoose, Nodemailer",
    screenshots: ["/click2-1.jpeg", "/click2-2.jpeg", "/click2-3.jpeg"],
  },
];

export default function PortfolioCarousel() {
  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24 px-4 sm:px-6 lg:px-20 text-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 space-y-4">
          <div className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-full bg-white shadow-sm">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight">
            Latest Works
          </h2>
        </div>

        <Tabs defaultValue="professional" className="w-full">
          {/* Responsive Tabs List */}
          <div className="flex justify-center mb-10 md:mb-14">
            <TabsList className="bg-white border border-gray-200 rounded-full shadow-sm p-1 h-auto flex-wrap justify-center">
              <TabsTrigger
                value="professional"
                className="rounded-full text-xs sm:text-sm px-4 py-2 sm:px-8 sm:py-3 font-medium gap-2 data-[state=active]:bg-black data-[state=active]:text-white transition-all cursor-pointer"
              >
                <Briefcase size={14} />
                Professional
              </TabsTrigger>
              <TabsTrigger
                value="side"
                className="rounded-full text-xs sm:text-sm px-4 py-2 sm:px-8 sm:py-3 font-medium gap-2 data-[state=active]:bg-black data-[state=active]:text-white transition-all cursor-pointer"
              >
                <Rocket size={14} />
                Side Projects
              </TabsTrigger>
            </TabsList>
          </div>

          {[
            { value: "professional", projects: professionalProjects },
            { value: "side", projects: sideProjects },
          ].map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="outline-none">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {tab.projects.map((project) => (
                    <CarouselItem key={project.id} className="pl-4 basis-full">
                      {/* Responsive Grid System */}
                      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr,auto] gap-8 lg:gap-12 bg-white lg:bg-transparent p-6 lg:p-0 rounded-3xl border lg:border-none border-gray-100 shadow-sm lg:shadow-none">
                        
                        {/* Title Column */}
                        <div className="order-1">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2"
                          >
                            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-gray-600 transition-colors">
                              {project.title}
                            </h3>
                            <ArrowUpRight
                              size={22}
                              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-gray-400 group-hover:text-black"
                            />
                          </a>
                        </div>

                        {/* Middle Content Column */}
                        <div className="space-y-6 order-3 lg:order-2">
                          <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
                            {project.description}
                          </p>

                          <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                            <Diamond size={14} className="mt-1 flex-shrink-0" />
                            <span className="font-medium uppercase tracking-wider leading-relaxed">
                              {project.stack}
                            </span>
                          </div>

                          {/* Responsive Screenshot Grid: 1 col on mobile, 3 on desktop */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {project.screenshots.map((src, idx) => (
                              <div key={idx} className="relative aspect-[16/10] rounded-2xl shadow-sm overflow-hidden border border-gray-100 bg-gray-50 group">
                                <Image
                                  src={src}
                                  alt={`${project.title} preview ${idx + 1}`}
                                  fill
                                  className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Badge Column */}
                        <div className="order-2 lg:order-3 flex lg:justify-end items-start">
                          <span className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-full tracking-widest uppercase shadow-lg shadow-black/10">
                            {project.role}
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Mobile-Friendly Controls */}
                <div className="flex justify-center sm:justify-end gap-3 mt-10">
                  <CarouselPrevious className="static translate-y-0 h-12 w-12 border-gray-200 hover:bg-black hover:text-white transition-colors" />
                  <CarouselNext className="static translate-y-0 h-12 w-12 border-gray-200 hover:bg-black hover:text-white transition-colors" />
                </div>
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>

        {/* Responsive Footer Link */}
        <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 group">
          <span className="text-gray-400 text-sm">Want to see the source code?</span>
          <a 
            href="https://github.com/ShrivastvAryan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>View More on GitHub</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  )
}