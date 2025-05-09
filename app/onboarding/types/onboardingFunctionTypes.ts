import { Session } from "@supabase/supabase-js";
import { FormState } from "./FormTypes";

export interface ICheckSession {
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}

export interface IFetchProfile {
  userId: string;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}
