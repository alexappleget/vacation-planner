export interface IOnboardingForm {
  name: string;
  ageRange: string;
  interests: string[];
  energyLevel: string;
  dietaryPreferences: string;
  favoriteCuisines: string[];
}

export interface IOnboardingFormSteps {
  form: IOnboardingForm;
  setForm: React.Dispatch<React.SetStateAction<IOnboardingForm>>;
}
