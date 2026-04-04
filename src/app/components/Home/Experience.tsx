import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '../ScrollReveal';

const experiences = [
  {
    company: "DashX",
    period: "October 2025 - Present",
    role: [
      
  "Full-stack intern at DashX (Web3), building scalable systems and high-performance UI for production applications.",
  "Implemented end-to-end integration of On-Ramp and Off-Ramp systems on the frontend, handling real-world payment flows.",
  "Developed the company's portfolio website from scratch."
    ],
    tags: ["Full Stack Developer"],
    details: null,
    isActive: true,
  },
  {
    company: "GeekRoom",
    period: "April 2025 - Present",
    role: [
      "Organised hackathons.",
      "Contributed in developing websites for hackathons.",
    ],
    tags: ["Developer", "UIUX", "Event Management"],
    isActive: true,
  },
  {
    company: "Freelancing",
    period: "February 2025 - Present",
    role: ["Innovated designs, New York, Senior Product Designer"],
    tags: ["Full Stack Developer"],
    details: null,
    isActive: true,
  },
];

const education = [
  {
    school: "Dr. Akhilesh Das Gupta Institute of Professional Studies",
    period: "2024-2028",
    role: [
      "Grade:8.5 CGPA",
      "Geek Room (Core Member)",
      "GFG (UI/UX Designer)"
    ],
    tags: ["B.Tech DS-AI"],
    details: null,
    isActive: true,
  },
  {
    school: "Brilliants' Convent",
    period: "2017-2023",
    role: [
      "CBSE national level science project (Co-Developer)",
      "Vice Captain",
      "Mr. Brilliantian (2023 Batch)",
    ],
    tags: ["High School Diploma"],
    details: null,
    isActive: false,
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20 text-[#1A1A1A]">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="space-y-4">
            <ScrollReveal>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                <span className="text-gray-500 uppercase tracking-widest text-[10px]">Experiences</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-5xl font-medium tracking-tight max-w-md leading-tight">
                Explore My Journey
              </h2>
            </ScrollReveal>
          </div>
          <div className="max-w-xs space-y-4">
            <ScrollReveal delay={0.2}>
              <p className="text-gray-500 text-sm leading-relaxed">
                Over the past 2 years, I've had the opportunity to work on a wide range of projects, collaborating with diverse teams.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link
                href="https://www.linkedin.com/in/aryanshrivastava290605/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium border-b border-black pb-1 hover:text-blue-600 transition-opacity"
              >
                LinkedIn <ArrowUpRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Experience List */}
        <div className="divide-y  divide-gray-100">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="py-15 first:pt-0 last:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left: Company & Date */}
                  <div className="md:col-span-5 py-5">
                    <h3 className="text-xl font-medium">{exp.company}</h3>
                    <p className="text-gray-400 text-sm mt-2">• {exp.period}</p>
                  </div>

                  {/* Middle: Role */}
                  <div className="md:col-span-4">
                    <div className="text-gray-400 text-sm leading-relaxed max-w-[350px] space-y-1 py-5">
                      {exp.role.map((item, i) => (
                        <p key={i}> • {item}</p>
                      ))}
                    </div>
                  </div>

                  {/* Right: Tags */}
                  <div className="md:col-span-3 flex justify-end gap-2 py-5">
                    {exp.tags.map(tag => (
                      <span key={tag} className={`px-4 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-wider ${exp.isActive ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Detail View (Conditional) */}
                {exp.isActive && exp.details && (
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-5 flex items-center gap-8 pl-4">
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

       <div className='mt-16 space-y-4'>
        <ScrollReveal>
          <p className='py-6 text-3xl font-medium tracking-tight max-w-md leading-tight'>
            Education
          </p>
        </ScrollReveal>
        <div className="divide-y divide-gray-100">
          {education.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="py-10 first:pt-0 last:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left: Company & Date */}
                  <div className="md:col-span-5 py-5">
                    <h3 className="text-xl font-medium">{exp.school}</h3>
                    <p className="text-gray-400 text-sm mt-2">• {exp.period}</p>
                  </div>

                  {/* Middle: Role */}
                  <div className="md:col-span-4 py-5">
                    <div className="md:col-span-4">
                      <div className="text-gray-400 text-sm leading-relaxed max-w-[350px] space-y-1">
                        {exp.role.map((item, i) => (
                          <p key={i}>• {item}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Tags */}
                  <div className="md:col-span-3 flex justify-end gap-2 py-5">
                    {exp.tags.map(tag => (
                      <span key={tag} className={`px-4 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-wider ${exp.isActive ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
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