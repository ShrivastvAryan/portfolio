"use client";

import React from "react";
import StackIcon from "tech-stack-icons";

export interface TechItem {
  name: string;
  textColor: string;
  icon: React.ReactNode;
}

export const techStack: TechItem[] = [
  {
    name: "Next.js",
    textColor: "#000000",
    icon:<StackIcon name="nextjs2" />
  },
  {
    name: "TypeScript",
    textColor: "#FFFFFF",
    icon: <StackIcon name="typescript" />
  },
  {
    name: "Django",
    textColor: "#000000",
    icon: <StackIcon name="django" />
  },
  {
    name: "PostgreSQL",
    textColor: "#000000",
    icon: <StackIcon name="postgresql" />
  },
  {
    name: "TanStack",
    textColor: "#000000",
    icon: <StackIcon name="tanstack" />
  },
  {
    name: "React",
    textColor: "#000000",
    icon: <StackIcon name="react" />
  },
  {
    name: "Python",
    textColor: "#FFFFFF",
    icon: <StackIcon name="python" />
  },
  {
    name: "Docker",
    textColor: "#FFFFFF",
    icon: <StackIcon name="docker" />
  },
  {
    name: "JWT",
    textColor: "#FFFFFF",
    icon: <StackIcon name="auth0" />
  },
  {
    name: "MongoDB",
    textColor: "#FFFFFF",
    icon: <StackIcon name="mongodb" />
  },
  {
    name: "Redis",
    textColor: "#FFFFFF",
    icon: <StackIcon name="redis" />
  },
  {
    name: "C++",
    textColor: "#FFFFFF",
    icon: <StackIcon name="c++" />
  },
  {
    name: "Tailwind CSS",
    textColor: "#000000",
    icon: <StackIcon name="tailwindcss" />
  },
  {
    name: "Git",
    textColor: "#FFFFFF",
    icon: <StackIcon name="git" />
  },
  {
    name: "Postman",
    textColor: "#FFFFFF",
    icon: <StackIcon name="postman" />
  },
  {
    name: "Supabase",
    textColor: "#FFFFFF",
    icon: <StackIcon name="supabase" />
  },

];

export function TechBadge({
  tech,
  isLight = false,
}: {
  tech: TechItem;
  isLight?: boolean;
}) {
  return (
    <span
      style={{ color: "#FFFFFF" }}
      className="cursor-target mx-1.5 my-2 sm:mx-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full border shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2 select-none"
    >
      <span
        style={{ color: "#FFFFFF" }}
        className="w-4 h-4 shrink-0"
      >
        {tech.icon}
      </span>
      <span className="tracking-wide font-medium">{tech.name}</span>
    </span>
  );
}
