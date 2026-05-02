import Image from 'next/image';
import ResumeDownloadButton from '../Resume/resume';

export default function PortfolioHero() {
  return (
    <main className="relative min-h-screen w-full bg-brand-tertiary text-[#1A1A1A] overflow-hidden selection:bg-black selection:text-white">
      
      {/* Sidebar Label (Left) */}
      <div className="absolute hidden xl:block left-8 top-1/2 -rotate-90 origin-left text-[10px] uppercase tracking-[0.2em] text-gray-400">
       SOFTWARE DEVELOPER
      </div>

      <div className="container mx-auto px-6 xl:px-20 min-h-screen flex flex-col xl:flex-row items-center justify-between pt-20 xl:pt-0">
        
        {/* Left Content Column */}
        <div className="w-full xl:w-[50%] z-10 space-y-12 flex flex-col xl:items-start items-center xl:justify-start justify-center">

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-[120px] md:text-[180px] lg:text-[200px] leading-[0.8] font-normal tracking-tighter">
              Hello
            </h1>
            <p className="text-xl xl:text-xl font-medium tracking-tight flex justify-center xl:items-start xl:justify-start items-center gap-3">
              <span className="w-8 h-[1px] bg-black hidden xl:block"></span>
              It's Aryan Shrivastava
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-0 xl:pt-6">
           <ResumeDownloadButton/>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full xl:w-[50%] relative h-[400px] md:h-[800px] xl:h-screen mt-6 md:mt-0">
          <Image
            src="/removed-bg.png" 
            alt="D.Nova Portrait"
            fill
            className="object-contain object-bottom grayscale contrast-[1.1]"
            priority
          />
        </div>

      </div>
    </main>
  );
}