"use client";

import { supabaseClient } from "@/supabase/client";
import { IAuthContext, IProfile } from "@/types/interface";
import { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext<IAuthContext>({
  session: null,
  user: null,
  profile: null,
  loading: true,
  logIn: async () => {
    throw new Error("logIn function must be used within an AuthProvider");
  },
  logOut: async () => {
    throw new Error("logOut function must be used within an AuthProvider");
  },
  signUp: async () => {
    throw new Error("signUp function must be used within an AuthProvider");
  },
  refreshProfile: async () => {
    throw new Error(
      "refreshProfile function must be used within an AuthProvider"
    );
  },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signUp = async ({
    name,
    email,
    password,
    confirmPassword,
  }: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    if (!name || !email || !password || !confirmPassword) {
      throw new Error("Please fill out all fields.");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords must match.");
    }

    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    });

    if (error) throw error;
  };

  const logIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  };

  const logOut = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) throw error;
  };

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = useCallback(async () => {
    if (user) {
      const { data } = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setProfile(data);
    } else {
      setProfile(null);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <AuthContext.Provider
      value={{
        profile,
        session,
        user,
        loading,
        logIn,
        logOut,
        signUp,
        refreshProfile: fetchProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
