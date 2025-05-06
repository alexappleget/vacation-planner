import { Compass } from "lucide-react";
import { JSX } from "react";
import { LoginButton } from "../LoginButton/LoginButton";

export const HomeHeader = (): JSX.Element => {
  return (
    <header className="border-b bg-[#f1f5f9] text-[#1e293b]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 text-xl font-bold">
          <Compass className="h-7 w-7 text-[#0077b6]" />{" "}
          <span>Vacation Planner</span>
        </div>

        <LoginButton className="px-4 py-2 text-sm font-medium rounded-lg bg-[#0077b6] text-[#f1f5f9] hover:bg-[#005f99] transition">
          Login
        </LoginButton>
      </div>
    </header>
  );
};
