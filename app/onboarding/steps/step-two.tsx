import { Checkbox } from "@/Components/checkbox/checkbox";
import { Label } from "@/Components/label/label";
import { IFormSteps } from "../types/FormTypes";

export const StepTwo = ({ form, setForm }: IFormSteps) => {
  const interests = [
    "Hiking",
    "Museums",
    "Shopping",
    "Food & Dining",
    "History",
    "Art",
    "Photography",
    "Beach",
    "Adventure Sports",
    "Wildlife",
    "Architecture",
    "Nightlife",
    "Music",
    "Festivals",
    "Relaxation",
    "Local Culture",
  ];

  const handleInterestToggle = (interest: string) => {
    setForm((prev) => {
      const interests = [...prev.interests];
      if (interests.includes(interest)) {
        return {
          ...prev,
          interests: interests.filter((i) => i !== interest),
        };
      } else {
        return {
          ...prev,
          interests: [...interests, interest],
        };
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-base">Hobbies & Interests</Label>
        <p className="text-sm text-muted-foreground mb-3">
          Select all that apply to help us recommend activities you&apos;ll
          enjoy
        </p>

        <div className="grid grid-cols-2 gap-2">
          {interests.map((interest) => (
            <div
              key={interest}
              className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer"
              onClick={() => handleInterestToggle(interest)}
            >
              <Checkbox
                key={interest}
                id={interest.toLowerCase().replace(/\s+/g, "-")}
                checked={form.interests.includes(interest)}
                className="cursor-pointer"
              />
              <Label
                htmlFor={interest.toLowerCase().replace(/\s+/g, "-")}
                className="cursor-pointer"
                onClick={() => handleInterestToggle(interest)}
              >
                {interest}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
