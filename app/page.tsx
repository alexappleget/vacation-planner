import { HeroSection } from "@/Components/hero-section/hero-section";
import { HomeFooter } from "@/Components/home-footer/home-footer";
import { HomeHeader } from "@/Components/home-header/home-header";
import { HowWorks } from "@/Components/how-works/HowWorks";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <HomeHeader />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* How It Works Section */}
        <HowWorks />
      </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
}
