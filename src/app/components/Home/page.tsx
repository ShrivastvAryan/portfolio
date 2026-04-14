import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import ResumeDownloadButton from '../Resume/resume';

export default function PortfolioHero() {
  return (
    <main className="relative min-h-screen bg-brand-tertiary text-[#1A1A1A] overflow-hidden selection:bg-black selection:text-white">
      
      {/* Sidebar Label (Left) */}
      <div className="absolute left-8 top-1/2 -rotate-90 origin-left text-[10px] uppercase tracking-[0.2em] text-gray-400 hidden lg:block">
       SOFTWARE DEVELOPER
      </div>

      {/* Sidebar Year (Bottom Left) */}
      {/* <div className="absolute left-8 bottom-12 text-[10px] uppercase tracking-widest text-gray-400 hidden lg:block">
        2024
      </div> */}

      <div className="container mx-auto px-6 lg:px-20 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-20 lg:pt-0">
        
        {/* Left Content Column */}
        <div className="w-full lg:w-1/2 z-10 space-y-12">
          
          {/* Stats Grid */}
          {/* <div className="flex gap-16">
            <div>
              <h3 className="text-3xl font-light tracking-tight">+20</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Project completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-light tracking-tight">+50</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Startup raised</p>
            </div>
          </div> */}

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-[120px] lg:text-[180px] leading-[0.8] font-normal tracking-tighter">
              Hello
            </h1>
            <p className="text-lg lg:text-xl font-medium tracking-tight flex items-center gap-3">
              <span className="w-8 h-[1px] bg-black"></span>
              It's Aryan Shrivastava
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-6">
           <ResumeDownloadButton/>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-screen mt-12 lg:mt-0">
          {/* <Image
            src="/dp.jpeg" 
            alt="D.Nova Portrait"
            fill
            className="object-cover lg:object-contain object-bottom grayscale contrast-[1.1]"
            priority
          /> */}
        </div>

      </div>
    </main>
  );
}