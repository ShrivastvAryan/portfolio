import TargetCursor from "@/components/TargetCursor";
import ExperienceSection from "./components/Home/Experience";
import PortfolioHero from "./components/Home/page";
import PortfolioCarousel from "./components/Home/PortfolioCaraousel";

export default function Home() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        targetSelector=".cursor-target, a, button"
      />
      <PortfolioHero />
      <PortfolioCarousel />
      <ExperienceSection />
    </>
  );
}
