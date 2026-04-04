import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { label: "LinkedIn", href: "#home" },
    { label: "Github", href: "#about" },
    { label: "LeetCode", href: "#portfolio" },
  ];

  return (
    <footer className="w-full font-sans">
      {/* Top CTA Section */}
      <div className="bg-[#F6F6F6] py-32 px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#1A1A1A] mb-6">
          Interested in My Journey?
        </h2>
        <p className="text-gray-500 max-w-2xl text-lg leading-relaxed mb-10">
          Explore my resume to get a closer look at my development experience, hands-on projects, technical stack, and problem-solving approach.
        </p>
        <Link 
          href="#" 
          className="group flex items-center gap-2 text-lg font-medium border-b-2 border-black pb-1 transition-opacity hover:opacity-60"
        >
          Resume
          <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Bottom Black Bar */}
      <div className="bg-[#141414] text-white py-12 lg:py-20 px-6 lg:px-20">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Pill Navigation */}
          <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium text-gray-400">
           <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium text-gray-400">
  {navItems.map(({ label, href }) => (
    <Link key={label} href={href} className='hover:text-white transition-colorsS'>
      {label}
    </Link>
  ))}
</nav>
          </nav>

          {/* Email Address */}
          <div className="relative group">
            <a 
              href="mailto:hello@dnova.com" 
              className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tighter hover:text-gray-300 transition-colors"
            >
              aryanshrivastava.xyz
            </a>
            {/* Subtle underline effect on hover */}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </div>

        </div>
      </div>
    </footer>
  );
}