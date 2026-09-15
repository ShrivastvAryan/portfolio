import TargetCursor from "@/components/TargetCursor";
import ExperienceSection from "./components/Home/Experience";
import PortfolioHero from "./components/Home/page";
import PortfolioCarousel from "./components/Home/PortfolioCaraousel";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        targetSelector=".cursor-target, a, button"
      />
      <ScrollReveal>
        <PortfolioHero />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <PortfolioCarousel />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <ExperienceSection />
      </ScrollReveal>

    </>
  );
}
