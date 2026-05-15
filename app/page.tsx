import { TopBar } from "./components/TopBar";
import { Hero } from "./components/Hero";
import { LogoStrip } from "./components/LogoStrip";
import { WedgeSection } from "./components/WedgeSection";
import { Baseline } from "./components/Baseline";
import { CompetitorGrid } from "./components/CompetitorGrid";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <div className="shell">
      <TopBar />
      <Hero />
      <LogoStrip />
      <WedgeSection />
      <section className="sec" style={{ paddingTop: 48 }}>
        <Baseline />
      </section>
      <CompetitorGrid />
      <Footer />
    </div>
  );
}
