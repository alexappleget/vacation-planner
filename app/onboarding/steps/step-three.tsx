import { Checkbox } from "@/Components/checkbox/checkbox";
import { Label } from "@/Components/label/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/select/select";
import { StepThreeProps } from "../types/FormTypes";

export const StepThree = ({
  handleCuisineToggle,
  form,
  setForm,
}: StepThreeProps) => {
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

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="dietaryPreferences">Dietary Preferences</Label>
        <Select
          value={form.dietaryPreferences}
          onValueChange={(value) =>
            setForm({ ...form, dietaryPreferences: value })
          }
        >
          <SelectTrigger id="dietaryPreferences">
            <SelectValue placeholder="Select dietary preference" />
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
              className="flex items-center space-x-2 rounded-md border p-3"
            >
              <Checkbox
                id={cuisine.toLowerCase().replace(/\s+/g, "-")}
                checked={form.favoriteCuisines.includes(cuisine)}
                onCheckedChange={() => handleCuisineToggle(cuisine)}
              />
              <Label
                htmlFor={cuisine.toLowerCase().replace(/\s+/g, "-")}
                className="cursor-pointer"
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
