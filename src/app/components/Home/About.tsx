import Image from 'next/image';
import { Globe, Sparkles, ArrowUpRight, Code, SquareCode } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="bg-[#F6F6F6] pt-24 pb-8 xl:py-24 px-6 xl:px-20 font-sans text-[#1A1A1A]">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-12 xl:gap-8 ">
        
        {/* Left Column: Heading & Intro */}
        <div className="xl:col-span-4 space-y-6 w-full xl:pt-10 flex flex-col items-center xl:items-start mb-8 xl:mb-0 justify-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-5xl font-medium tracking-tight">About Me</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 leading-relaxed lg:text-xl max-w-sm lg:max-w-full xl:max-w-sm text-center xl:text-left">
             I enjoy building products that solve real problems, from smooth frontend experiences to scalable backend systems. 
            I focus on writing clean, efficient code and creating applications that feel fast, intuitive, and production-ready. Let&apos;s build something meaningful.
            </p>
          </ScrollReveal>
        </div>

        {/* Middle Column: The Stat Card */}
        <div className="md:col-span-4 bg-white rounded-3xl p-5 xl:p-10 shadow-sm space-y-8 flex flex-col items-center text-center">
          <ScrollReveal delay={0.1}>
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 shadow-inner">
               <Code />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className=" text-4xl xl:text-7xl font-normal tracking-tighter">Tech Stack</h3>
            </div>
          </ScrollReveal>
              <ScrollReveal delay={0.3} className="w-full">
        <div className="flex flex-wrap justify-center gap-2 xl:gap-3 py-2 xl:py-4">
          {[
            "Next.js", "TypeScript", "Python", "Machine Learning", 
            "Docker", "JWT", "GraphQL", "Supabase", "MongoDB","C++", "Express.js","Git"
          ].map((skill) => (
            <span 
              key={skill} 
              className="px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-full border border-slate-700 shadow-sm hover:bg-blue-600 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </ScrollReveal>
        </div>

        {/* Right Column: Mini Image & Bullet Points */}
        <div className="xl:col-span-4 space-y-2 md:mt-8 lg:mt-4 xl:mt-0 xl:space-y-12 xl:justify-end flex gap-4 xl:gap-0 flex-row xl:flex-col justify-between h-full">
          {/* Top Profile with Arrow Overlay */}
          <ScrollReveal delay={0.2} className="self-end">
            <Link href='https://github.com/ShrivastvAryan' target='_blank'>
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden grayscale group cursor-pointer">
              <Image 
                src="/github.svg" 
                alt="Github" 
                fill 
                className="object-cover p-2 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 rounded-full p-1 transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
            </Link>
          </ScrollReveal>

          {/* Bullet Points */}
          <div className="space-y-10 flex items-center xl:text-end">
            <ScrollReveal delay={0.3}>
              <div className="flex gap-4 mt-6 md:mt-2 xl:mt-0 items-start">
                <p className="text-gray-500 text-lg lg:text-base leading-relaxed">
                I build scalable, modern full-stack web applications with a strong focus on performance, maintainability, and clean architecture.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
}