"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackCardProps {
  children: React.ReactNode;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function StackCard({ children, index, total, containerRef }: StackCardProps) {
  // Each card listens to the overall container scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const segmentSize = 1 / total;
  const segmentStart = index * segmentSize;
  const segmentEnd = segmentStart + segmentSize;

  // Scale slightly down as the next card slides over
  const scale = useTransform(
    scrollYProgress,
    [segmentStart, segmentEnd],
    index < total - 1 ? [1, 0.93] : [1, 1]
  );

  // Corners round up as card recedes
  const borderRadius = useTransform(
    scrollYProgress,
    [segmentStart, segmentEnd],
    index < total - 1 ? ["0px", "24px"] : ["0px", "0px"]
  );

  // Dark overlay appears as next card pushes over this one
  const overlayOpacity = useTransform(
    scrollYProgress,
    [segmentStart, segmentEnd],
    index < total - 1 ? [0, 0.4] : [0, 0]
  );

  return (
    <div
      className="sticky top-0 h-screen overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className="relative w-full h-full origin-top"
        style={{ scale, borderRadius }}
      >
        <div className="w-full h-full overflow-y-auto">{children}</div>

        {/* Darkening overlay */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity, borderRadius }}
        />
      </motion.div>
    </div>
  );
}

interface SectionStackProps {
  sections: React.ReactNode[];
}

/**
 * SectionStack — renders sections as sticky cards that stack over each
 * other on scroll. Each card gets its own scroll "lane" of 100vh.
 */
export default function SectionStack({ sections }: SectionStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{ height: `${sections.length * 100}vh` }}
    >
      {sections.map((section, i) => (
        <StackCard
          key={i}
          index={i}
          total={sections.length}
          containerRef={containerRef}
        >
          {section}
        </StackCard>
      ))}
    </div>
  );
}
