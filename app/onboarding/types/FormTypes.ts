import React from "react";

export interface FormState {
  name: string;
  ageRange: string;
  interests: string[];
  energyLevel: string;
  dietaryPreferences: string;
  favoriteCuisines: string[];
}

export interface StepOneProps {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}

export interface StepTwoProps {
  handleInterestToggle: (interest: string) => void;
  form: FormState;
}

export interface StepThreeProps {
  handleCuisineToggle: (cuisine: string) => void;
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}

export interface StepFourProps {
  handleTravelStyleToggle: (travelStyle: string) => void;
  form: FormState;
}

export interface StepFiveProps {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}
