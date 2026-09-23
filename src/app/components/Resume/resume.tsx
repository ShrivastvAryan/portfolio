"use client";

import { Download } from "lucide-react";

export default function ResumeDownloadButton() {
  return (
    <a
      href="https://docs.google.com/document/d/1dWiiA2KjW1XCJhxZ4uNyAfRloKIjdy--leQTsDt19lc/edit?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-3xl bg-white px-6 py-3 text-black font-medium shadow-md transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
    >
      <Download size={18} />
      View Resume
    </a>
  );
}
