import { ArrowRight, Calendar, PiggyBank } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-[#0077b6] via-[#0096c7] to-[#48cae4] text-[#f1f5f9]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Hero Text */}
          <div className="flex flex-col justify-center space-y-6 h-full">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
              Plan Your Perfect Vacation{" "}
              <span className="text-[#ff6f61]">with AI</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-lg leading-relaxed">
              Discover personalized itineraries, smart budgeting tools, and
              expert travel recommendations—all tailored to your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="flex items-center gap-2 px-6 py-3 bg-[#ff6f61] font-semibold rounded-lg shadow-md hover:bg-[#e85b50] transition"
                aria-label="Get Started"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/how-it-works"
                className="px-6 py-3 border border-[#f1f5f9] font-semibold rounded-lg hover:bg-[#f1f5f9]/20 hover:text-[#1e293b] transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image/Preview */}
          <div className="relative">
            <div className="relative border border-[#cbd5e1] rounded-lg shadow-lg overflow-hidden bg-gradient-to-b from-[#e2e8f0] to-[#d9e2ec] text-[#0f172a]">
              <div className="p-4 space-y-4">
                <h3 className="text-xl font-bold">
                  Your Dream Vacation Awaits
                </h3>
                <p className="text-sm">
                  Here&apos;s a sneak peek of what we can plan for you:
                </p>
                <div className="space-y-4">
                  {/* Day 1 */}
                  <div className="p-3 rounded-md bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] shadow-md hover:shadow-lg transition-shadow border border-[#cbd5e1]">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#48cae4]/30 rounded-full">
                        <Calendar className="h-6 w-6 text-[#0077b6]" />
                      </div>
                      <span className="font-medium text-lg">
                        Day 1: Tokyo Exploration
                      </span>
                    </div>
                    <p className="text-sm mt-2">
                      Morning visit to Meiji Shrine, lunch at local ramen shop,
                      afternoon shopping in Shibuya.
                    </p>
                  </div>
                  <div className="p-3 rounded-md bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] shadow-md hover:shadow-lg transition-shadow border border-[#cbd5e1]">
                    <div className="flex items-center gap-2">
                      <div className="p-3 bg-[#48cae4]/30 rounded-full">
                        <Calendar className="h-6 w-6 text-[#0077b6]" />
                      </div>
                      <span className="font-medium text-lg">
                        Day 2: Cultural Immersion
                      </span>
                    </div>
                    <p className="text-sm mt-2">
                      Tea ceremony experience, visit to Tokyo National Museum,
                      evening food tour in Shinjuku.
                    </p>
                  </div>
                  <div className="p-3 rounded-md bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] shadow-md hover:shadow-lg transition-shadow border border-[#cbd5e1]">
                    <div className="flex items-center gap-2">
                      <div className="p-3 bg-[#48cae4]/30 rounded-full">
                        <PiggyBank className="h-6 w-6 text-[#0077b6]" />
                      </div>
                      <span className="font-medium text-lg">
                        Budget Estimate
                      </span>
                    </div>
                    <p className="text-sm mt-2">
                      $2,500 for 5 days including accommodations, food, and
                      activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
