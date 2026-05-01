import Image from 'next/image';
import ResumeDownloadButton from '../Resume/resume';

export default function PortfolioHero() {
  return (
    <main className="relative min-h-screen w-full bg-brand-tertiary text-[#1A1A1A] overflow-hidden selection:bg-black selection:text-white">
      
      {/* Sidebar Label (Left) */}
      <div className="absolute hidden lg:block left-8 top-1/2 -rotate-90 origin-left text-[10px] uppercase tracking-[0.2em] text-gray-400">
       SOFTWARE DEVELOPER
      </div>

      <div className="container mx-auto px-6 lg:px-20 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-20 lg:pt-0">
        
        {/* Left Content Column */}
        <div className="w-full lg:w-1/2 z-10 space-y-12 flex flex-col items-start lg:items-center justify-start lg:justify-center">

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-[120px] lg:text-[180px] leading-[0.8] font-normal tracking-tighter">
              Hello
            </h1>
            <p className="text-lg lg:text-xl font-medium tracking-tight flex justify-center lg:items-start lg:justify-start items-center gap-3">
              <span className="w-8 h-[1px] bg-black hidden lg:block"></span>
              It's Aryan Shrivastava
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-0 lg:pt-6">
           <ResumeDownloadButton/>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full lg:w-1/2 relative h-auto mt-6 lg:mt-0">
          <Image
            src="/removed-bg.png" 
            alt="D.Nova Portrait"
            height={800}
            width={800}
            className="object-contain object-bottom grayscale contrast-[1.1]"
            priority
          />
        </div>

      </div>
    </main>
  );
}