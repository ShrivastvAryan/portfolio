import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '../ScrollReveal';

const experiences = [
  {
    company: "DashX",
    period: "October 2025 - Present",
    position:"Internship",
   role: [
  "Engineered Web3-enabled frontend systems with scalable, high-performance API integrations.",
  "Led end-to-end implementation of on-ramp and off-ramp transaction flows, optimizing usability and conversion.",
  "Integrated international on-ramp and off-ramp solutions with seamless backend API orchestration for cross-border transactions.",
],
    tags: ["Full Stack Developer"],
    details: null,
    isActive: true,
  },
  {
    company: "Freelancing",
    period: "February 2025 - Present",
    position:"",
    role: ["Developed responsive, high-performance websites for clients using modern frontend technologies.",
      "Integrated REST APIs to deliver dynamic and data-driven user experiences.",
      "Built clean and maintainable interfaces using Next.js, Tailwind CSS, and shadcn/ui.",
      "Customized websites based on client requirements with a focus on responsiveness and performance."
    ],
    tags: ["Full Stack Developer"],
    details: null,
    isActive: true,
  },
  {
    company: "GeekRoom",
    period: "April 2025 - Present",
    position:"Core Member",
    role: [
  "Organized and managed hackathons, handling end-to-end coordination and execution.",
  "Contributed to the development of hackathon websites, improving user experience and functionality.",
  "Mentored participants during a GeekRoom hackathon, providing technical guidance and project support."
],
    tags: ["Developer", "UI/UX", "Event Management"],
    isActive: true,
  },
];

const education = [
  {
    school: "Guru Gobind Singh Indraprastha University",
    period: "2024-2028",
    role: [
      "Grade:8.5 CGPA",
      "Geek Room (Core Member)",
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
    <section className="bg-white pt-12 lg:pt-16 pb-8 lg:py-24 px-6 lg:px-20 text-[#1A1A1A]">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 lg:mb-20 gap-8">
          <div className="space-y-4">
            <ScrollReveal>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                <span className="text-gray-500 uppercase tracking-widest text-[10px]">Experiences</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-md leading-tight">
                Explore My Journey
              </h2>
            </ScrollReveal>
          </div>
          <div className="max-w-xs space-y-4">
            <ScrollReveal delay={0.2}>
              <p className="text-gray-500 text-sm leading-relaxed">
                I&apos;ve worked across different teams, adapting to varied workflows and contributing to projects from idea to deployment.
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
              <div className="py-12 lg:py-15 first:pt-0 last:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-start">
                  
                  {/* Left: Company & Date */}
                  <div className="md:col-span-5 py-3 lg:py-5">
                   <h3 className="text-xl font-medium">
                      {exp.company}
                      {exp.position && (
                      <span className="text-gray-400 text-sm font-light">
                        {" "}({exp.position})
                      </span>
                      )}
</h3>
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
                  <div className="md:col-span-3 flex flex-wrap justify-end gap-2 py-5">
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

       <div className='mt-8 lg:mt-16 space-y-4'>
        <ScrollReveal>
          <p className='py-2 lg:py-6 text-3xl font-medium tracking-tight max-w-md leading-tight'>
            Education
          </p>
        </ScrollReveal>
        <div className="divide-y divide-gray-100">
          {education.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="py-10 first:pt-0 last:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left: Company & Date */}
                  <div className="md:col-span-5 pb-2 pt-3 lg:py-5">
                    <h3 className="text-xl font-medium">{exp.school}</h3>
                    <p className="text-gray-400 text-sm mt-2">• {exp.period}</p>
                  </div>

                  {/* Middle: Role */}
                  <div className="md:col-span-4 py-0 lg:py-5">
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