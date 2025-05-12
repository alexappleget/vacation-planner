import { supabaseClient } from "@/supabase/client";
import { fetchUserProfile } from "../supabase/supabase-functions";
import { ICheckSession, IFetchProfile } from "@/types/supabase/supabase-types";

export const checkSession = async ({ setSession }: ICheckSession) => {
  const { data, error } = await supabaseClient.auth.getSession();
  if (error || !data.session) {
    return error;
  }
  setSession(data.session);
};

export const fetchProfile = async ({ userId, setForm }: IFetchProfile) => {
  const profile = await fetchUserProfile({ userId });
  setForm((prev) => ({
    ...prev,
    name: profile.name || "",
    ageRange: profile.ageRange || "",
    interests: profile.interests || [],
    energyLevel: profile.energyLevel || "balanced",
    dietaryPreferences: profile.dietaryPreferences || "",
    favoriteCuisines: profile.favoriteCuisines || [],
  }));
};
