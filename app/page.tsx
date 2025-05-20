"use client";

import { HeroSection } from "@/Components/hero-section/hero-section";
import { HomeFooter } from "@/Components/home-footer/home-footer";
import { HomeHeader } from "@/Components/home-header/home-header";
import { HowWorks } from "@/Components/how-works/HowWorks";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { JSX, useEffect } from "react";

export default function Home(): JSX.Element {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

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
