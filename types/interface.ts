import { Session, User } from "@supabase/supabase-js";

export interface IAuthContext {
  session: Session | null;
  user: User | null;
  profile: IProfile | null;
  loading: boolean;
  logIn: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  logOut: () => Promise<void>;
  signUp: ({
    name,
    email,
    password,
    confirmPassword,
  }: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

export interface ICheckSession {
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}

export interface IFetchProfile {
  userId: string;
  setForm: React.Dispatch<React.SetStateAction<IProfileForm>>;
}

export interface IOnboardingFormSteps {
  form: IProfileForm;
  setForm: React.Dispatch<React.SetStateAction<IProfileForm>>;
}

export interface IProfile {
  id: string;
  name: string;
  age: string;
  interests: string[];
  energyLevel: string;
  dietaryRestrictions: string;
  favoriteCuisines: string[];
  onboarding_complete: boolean;
}

export type IProfileForm = Omit<IProfile, "id" | "onboarding_complete">;
