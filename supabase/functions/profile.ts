import { FormState } from "@/app/onboarding/types/FormTypes";
import { supabaseClient } from "../client";

export const fetchUserProfile = async ({ userId }: { userId: string }) => {
  const { data: profile, error: profileError } = await supabaseClient
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (profileError) {
    throw profileError;
  }

  return profile;
};

export const updateUserProfile = async (form: FormState, userId: string) => {
  const { error: profileError } = await supabaseClient
    .from("profiles")
    .update({
      name: form.name,
      ageRange: form.ageRange,
      interests: form.interests,
      energyLevel: form.energyLevel,
      dietaryPreferences: form.dietaryPreferences,
      favoriteCuisines: form.favoriteCuisines,
      onboarding_complete: true,
    })
    .eq("id", userId)
    .select()
    .single();

  if (profileError) {
    throw profileError;
  }
};
