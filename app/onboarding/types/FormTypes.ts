import React from "react";

export interface FormState {
  name: string;
  ageRange: string;
  interests: string[];
  energyLevel: string;
  dietaryPreferences: string;
  favoriteCuisines: string[];
}

export interface IFormSteps {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}
