import { JSX } from "react";
import { HowWorksCards } from "./HowWorksCards";

export const HowWorks = (): JSX.Element => {
  const steps = [
    {
      step: 1,
      title: "Complete Your Profile",
      description:
        "Take out quiz to help us understand your interests, travel style, and preferences.",
    },
    {
      step: 2,
      title: "Specify Trip Details",
      description:
        "Tell us about your budget, dates, and any specific destinations or activities you want.",
    },
    {
      step: 3,
      title: "Get Your Custom Plan",
      description:
        "Our AI creates a personalized itinerary with accommodations, activities, and budgeting trips.",
    },
    {
      step: 4,
      title: "Save & Customize",
      description:
        "Adjust your plan as needed, save for your trip, and make your dream vacation a reality.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#e2e8f0] to-[#d9e2ec] text-[#0f172a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            How It Works
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our AI-powered platform makes vacation planning simple and
            personalized.
          </p>
        </div>
        <div className="grid gap-8 mt-12 lg:grid-cols-4">
          {steps.map((step) => (
            <HowWorksCards
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
