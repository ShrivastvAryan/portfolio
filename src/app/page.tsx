import AboutSection from "./components/Home/About";
import ExperienceSection from "./components/Home/Experience";
import PortfolioHero from "./components/Home/page";
import PortfolioCarousel from "./components/Home/PortfolioCaraousel";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal>
        <PortfolioHero />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <ExperienceSection />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <PortfolioCarousel />
      </ScrollReveal>
    </>
  );
}
