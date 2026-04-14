import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ResumeDownloadButton from "../Resume/resume";

export default function Footer() {
  const navItems = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aryanshrivastava290605/",
    },
    {
      label: "GitHub",
      href: "https://github.com/ShrivastvAryan",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/ShrivastvAryan/",
    },
  ];

  return (
    <footer className="w-full font-sans">
      {/* Top CTA Section */}
      <div className="bg-[#F6F6F6] py-32 px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#1A1A1A] mb-6">
          Interested in My Journey?
        </h2>

        <p className="text-gray-500 max-w-2xl text-lg leading-relaxed mb-10">
          Explore my resume to get a closer look at my development experience,
          hands-on projects, technical stack, and problem-solving approach.
        </p>

       <ResumeDownloadButton/>
      </div>

      {/* Bottom Black Bar */}
      <div className="bg-[#141414] text-white py-12 lg:py-20 px-6 lg:px-20">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium text-gray-400">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Email */}
          <div className="relative group">
            <a
              href="mailto:reachtoaryan29@gmail.com"
              className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tighter hover:text-gray-300 transition-colors"
            >
              reachtoaryan29@gmail.com
            </a>

            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}