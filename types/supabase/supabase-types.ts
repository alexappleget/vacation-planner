import { IOnboardingForm } from "../onboarding/onboarding-types";
import { Session } from "@supabase/supabase-js";

export interface ICheckSession {
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}

export interface IFetchProfile {
  userId: string;
  setForm: React.Dispatch<React.SetStateAction<IOnboardingForm>>;
}
