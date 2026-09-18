import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Aryan Shrivastava, a software developer focused on building thoughtful, fast web experiences.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Aryan Shrivastava",
    description:
      "A software developer focused on thoughtful, fast web experiences.",
    url: "/about",
  },
};

const principles = [
  {
    eyebrow: "How I work",
    title: "Start with the problem, then make the solution feel simple.",
    paragraphs: [
      "The best products are clear before they are clever. I like getting close to the people using a product, understanding what is getting in their way, and turning that into an experience that feels natural.",
      "From the first sketch to the final interaction, I care about the small details that make software feel quick, useful, and considered.",
    ],
    highlight: "Good work is equal parts curiosity, craft, and follow-through.",
  },
  {
    eyebrow: "Process",
    title: "Build with intent. Refine with feedback.",
    paragraphs: [
      "I enjoy the whole arc of making digital products: defining the right problem, shaping a practical solution, and bringing it to life in code. Every step should make the next one clearer.",
      "I value open collaboration, direct feedback, and shipping in small, thoughtful iterations. It keeps the work honest and makes room for better ideas.",
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "me@aryanshrivastava.dev",
    href: "mailto:me@aryanshrivastava.dev",
  },
  {
    label: "LinkedIn",
    value: "/in/aryanshrivastava290605",
    href: "https://www.linkedin.com/in/aryanshrivastava290605/",
  },
];

export default function AboutPage() {
  return (
    <article className="bg-[#101010] px-5 py-14 text-[#f6f4ef] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[640px]">
        <header className="border-b border-white/15 pb-10 sm:pb-14">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/55">
              A little about me
            </p>
            <Link
              href="/"
              className="rounded-full border border-white/15 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-white/40 hover:bg-white hover:text-black"
            >
              Home
            </Link>
          </div>
          <h1 className="font-[family-name:var(--font-geist-sans)] text-5xl font-black uppercase leading-[0.8] tracking-[-0.09em] sm:text-7xl">
            About
          </h1>
        
          <p className="mt-3 text-lg font-semibold leading-snug tracking-[-0.035em] sm:text-xl">
            I&apos;m Aryan — a software developer who enjoys turning ambitious
            ideas into clear, useful digital experiences.
          </p>
          <p className="mt-3 max-w-[590px] text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
            I build for the web with a focus on thoughtful interaction, solid
            engineering, and the kind of details that make a product pleasant
            to use.
          </p>

          <div className="relative mt-8 aspect-[2.15/1] overflow-hidden rounded-md bg-[#f4f2ed] sm:mt-10">
            <Image
              src="/pfp.jpeg"
              alt="Aryan Shrivastava"
              fill
              preload
              sizes="(max-width: 704px) calc(100vw - 40px), 640px"
              className="object-cover object-[50%_40%] grayscale contrast-125"
            />
          </div>
        </header>

        {principles.map(({ eyebrow, title, paragraphs, highlight }) => (
          <section
            key={eyebrow}
            className="border-b border-white/15 py-10 sm:py-14"
            aria-labelledby={eyebrow.toLowerCase().replace(" ", "-")}
          >
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/55">
              {eyebrow}
            </p>
            <h2
              id={eyebrow.toLowerCase().replace(" ", "-")}
              className="mt-3 text-lg font-semibold leading-snug tracking-[-0.035em] sm:text-xl"
            >
              {title}
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {highlight && (
              <p className="mt-7 max-w-md text-lg font-semibold leading-[1.05] tracking-[-0.055em] sm:text-xl">
                {highlight}
              </p>
            )}
          </section>
        ))}

        <section className="py-10 sm:py-14" aria-labelledby="off-the-clock">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/55">
            Off the clock
          </p>
          <h2
            id="off-the-clock"
            className="mt-3 text-lg font-semibold leading-snug tracking-[-0.035em] sm:text-xl"
          >
            Always learning, always making.
          </h2>
          <p className="mt-4 max-w-[590px] text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
            Outside of projects, you&apos;ll usually find me exploring new tools,
            sharpening my craft, or collecting ideas for the next thing to
            build.
          </p>
        </section>

        <section className="border-t border-white/15 pt-10 sm:pt-14" aria-label="Get in touch">
          <div className="space-y-3">
            {contactLinks.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.025] px-6 py-5 transition-colors hover:bg-white/[0.07] sm:px-7 sm:py-6"
              >
                <span>
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/55">
                    {label}
                  </span>
                  <span className="mt-1 block text-lg font-semibold tracking-[-0.035em] sm:text-xl">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
