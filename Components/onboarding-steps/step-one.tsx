import { Input } from "@/Components/input/input";
import { Label } from "@/Components/label/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/Components/radio-group/radio-group";
import { IOnboardingFormSteps } from "@/types/interface";

export const StepOne = ({ form, setForm }: IOnboardingFormSteps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          placeholder="Enter your age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Energy & Social Preferences</Label>
        <RadioGroup
          value={form.energyLevel}
          onValueChange={(value) => setForm({ ...form, energyLevel: value })}
          className="grid grid-cols-1 gap-2 pt-2"
        >
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="chill" id="chill" />
            <Label htmlFor="chill" className="flex-1 cursor-pointer">
              Chill
            </Label>
            <span className="text-sm text-muted-foreground">
              Relaxed pace, quiet activities
            </span>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="balanced" id="balanced" />
            <Label htmlFor="balanced" className="flex-1 cursor-pointer">
              Balanced
            </Label>
            <span className="text-sm text-muted-foreground">
              Mix of activities and downtime
            </span>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="active" id="active" />
            <Label htmlFor="active" className="flex-1 cursor-pointer">
              Active
            </Label>
            <span className="text-sm text-muted-foreground">
              Fast-paced, energetic activities
            </span>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
