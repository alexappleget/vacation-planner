import { Checkbox } from "@/Components/checkbox/checkbox";
import { Label } from "@/Components/label/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/select/select";
import { IOnboardingFormSteps } from "@/types/interface";

export const StepThree = ({ form, setForm }: IOnboardingFormSteps) => {
  const cuisines = [
    "Italian",
    "Japanese",
    "Mexican",
    "Thai",
    "Indian",
    "French",
    "Chinese",
    "Mediterranean",
    "American",
    "Middle Eastern",
    "Korean",
    "Spanish",
    "Vietnamese",
    "Greek",
    "Brazilian",
    "Caribbean",
  ];

  const handleCuisineToggle = (cuisine: string) => {
    setForm((prev) => {
      const cuisines = [...prev.favoriteCuisines];
      if (cuisines.includes(cuisine)) {
        return {
          ...prev,
          favoriteCuisines: cuisines.filter((c) => c !== cuisine),
        };
      } else {
        return {
          ...prev,
          favoriteCuisines: [...cuisines, cuisine],
        };
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
        <Select
          value={form.dietaryRestrictions}
          onValueChange={(value) =>
            setForm({ ...form, dietaryRestrictions: value })
          }
        >
          <SelectTrigger id="dietaryRestrictions">
            <SelectValue placeholder="Select dietary restriction" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Restrictions</SelectItem>
            <SelectItem value="vegetarian">Vegetarian</SelectItem>
            <SelectItem value="vegan">Vegan</SelectItem>
            <SelectItem value="pescatarian">Pescatarian</SelectItem>
            <SelectItem value="gluten-free">Gluten-Free</SelectItem>
            <SelectItem value="dairy-free">Dairy-Free</SelectItem>
            <SelectItem value="keto">Keto</SelectItem>
            <SelectItem value="halal">Halal</SelectItem>
            <SelectItem value="kosher">Kosher</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-base">Favorite Cuisines</Label>
        <p className="text-sm text-muted-foreground mb-3">
          Select cuisines you enjoy to help us recommend dining experiences
        </p>

        <div className="grid grid-cols-2 gap-2">
          {cuisines.map((cuisine) => (
            <div
              key={cuisine}
              className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer"
              onClick={() => handleCuisineToggle(cuisine)}
            >
              <Checkbox
                id={cuisine.toLowerCase().replace(/\s+/g, "-")}
                checked={form.favoriteCuisines.includes(cuisine)}
                className="cursor-pointer"
              />
              <Label
                htmlFor={cuisine.toLowerCase().replace(/\s+/g, "-")}
                className="cursor-pointer"
                onClick={() => handleCuisineToggle(cuisine)}
              >
                {cuisine}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
