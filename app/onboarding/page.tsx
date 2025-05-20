"use client";

import { Button } from "@/Components/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/card/card";
import { ArrowRight, Compass } from "lucide-react";
import { useState } from "react";
import { StepOne } from "@/Components/onboarding-steps/step-one";
import { StepTwo } from "@/Components/onboarding-steps/step-two";
import { StepThree } from "@/Components/onboarding-steps/step-three";
import { IProfileForm } from "@/types/interface";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/supabase/client";

export default function Onboarding() {
  const { logOut, profile, refreshProfile } = useAuth();
  const [step, setStep] = useState<number>(1);
  const [form, setForm] = useState<IProfileForm>({
    name: profile?.name || "",
    age: profile?.age || "",
    interests: profile?.interests || [],
    energyLevel: profile?.energyLevel || "balanced",
    dietaryRestrictions: profile?.dietaryRestrictions || "",
    favoriteCuisines: profile?.favoriteCuisines || [],
  });

  const handleComplete = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({
        name: form.name,
        age: form.age,
        interests: form.interests,
        energyLevel: form.energyLevel,
        dietaryRestrictions: form.dietaryRestrictions,
        favoriteCuisines: form.favoriteCuisines,
        onboarding_complete: true,
      })
      .eq("id", profile?.id);

    if (error) throw error;

    await refreshProfile();
  };

  const handleNext = () => {
    setStep((previous) => previous + 1);
  };

  return (
    <section className="h-screen flex flex-col px-4">
      <div className="container mx-auto border-b border-black flex items-center gap-2 font-bold text-xl h-16">
        <Compass className="h-7 w-7 text-black" />
        <span>Vacation Planner</span>
        <Button onClick={logOut}>Log Out</Button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Card className="mx-auto max-w-2xl w-full">
          <CardHeader>
            <CardTitle>Tell us about yourself</CardTitle>
            <CardDescription>
              Help us understand your preferences to create personalized
              vacation plans
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Step {step} of 3</span>
                <span className="text-sm text-muted-foreground">
                  {step === 1
                    ? "Basic Info"
                    : step === 2
                    ? "Interests"
                    : "Food Preferences"}
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {step === 1 && <StepOne form={form} setForm={setForm} />}

            {step === 2 && <StepTwo form={form} setForm={setForm} />}

            {step === 3 && <StepThree form={form} setForm={setForm} />}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button onClick={() => setStep((prev) => prev - 1)}>Back</Button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <Button onClick={handleNext}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleComplete}>Complete Profile</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
