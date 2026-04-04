import * as React from "react"
import Image from "next/image"
import { ArrowUpRight, ArrowRight, Diamond } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
Diamond

const projects = [
  {
    id: 1,
    title: "DigiMenu",
    duration: "February 2025 - Present",
    role: "Full Stack Development",
    description: "DigiMenu is a smart, mobile-friendly digital menu platform designed to simplify restaurant operations and enhance customer experience. Restaurants can replace traditional printed menus with a modern, QR-based solution.",
    stack: "Express.js, REST APIs, Next.js,Mongoose, Tanstack, JWT",
    screenshots: ["/digimenu-1.jpeg", "/digimenu-2.jpeg", "/digimenu-3.jpeg"],
  },
  {
    id: 2,
    title: "click2sponsor",
    duration: "2024 - 2025",
    role: "Backend Development",
    description: "click2sponsor — the ultimate platform that helps you discover potential sponsors and email them all with a single click.",
    stack: "Express.js, Rest APIs, Mongoose, Nodemailer",
    screenshots: ["/click2-1.jpeg", "/click2-2.jpeg", "/click2-3.jpeg"],
  },
   {
    id: 3,
    title: "Conscious",
    duration: "2024 - 2025",
    role: "Full Stack Development",
    description: "click2sponsor — the ultimate platform that helps you discover potential sponsors and email them all with a single click.",
    stack: "Express.js, Rest APIs, Mongoose, JWT, Tanstack",
    screenshots: ["/concious-1.png", "/concious-2.png", "/concious-3.png"],
  },
]

export default function PortfolioCarousel() {
  return (
    <section className="bg-[#F9F9F9] py-24 px-6 lg:px-20 text-[#1A1A1A]">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-full bg-white shadow-sm">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="text-[10px] uppercase tracking-widest font-medium">Portfolio</span>
          </div>
          <h2 className="text-6xl font-medium tracking-tight">Latest Works</h2>
        </div>

        {/* Shadcn Carousel */}
       <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 basis-full">
                
                {/* 3-Column Grid matching your "Education" UI */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,2fr,1fr] gap-10">
                  
                  {/* Left Column: Title & Date */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
                    <p className="text-gray-400 text-sm italic font-light">• {project.duration}</p>
                  </div>

                  {/* Middle Column: Details & Previews */}
                  <div className="space-y-6">
                    <p className="text-gray-500 leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Row */}
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Diamond size={14} />
                      <span className="font-medium uppercase tracking-wider">{project.stack}</span>
                    </div>

                    {/* Screenshot Preview Grid */}
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      {project.screenshots.map((src, idx) => (
                        <div key={idx} className="relative aspect-video rounded-xl  shadow-md overflow-hidden border border-gray-200 bg-gray-50 group">
                          <Image
                            src={src}
                            alt="Project preview"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Role Badge */}
                  <div className="flex lg:justify-end items-start">
                    <span className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-full tracking-widest uppercase whitespace-nowrap">
                      {project.role}
                    </span>
                  </div>
                </div>

              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls positioned at the bottom right */}
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-gray-200 hover:bg-black hover:text-white" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-gray-200 hover:bg-black hover:text-white" />
          </div>
        </Carousel>

        {/* Footer Link */}
        <div className="mt-16 flex justify-center items-center gap-4 group cursor-pointer">
          <span className="text-gray-400 text-sm">Check out More</span>
          <div className="flex items-center gap-2 font-medium">
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            <span>View More</span>
          </div>
        </div>

      </div>
    </section>
  )
}