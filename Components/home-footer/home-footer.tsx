import { Compass } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

export const HomeFooter = (): JSX.Element => {
  return (
    <footer className="border-t py-6 bg-[#1e293b] text-[#f1f5f9]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Compass className="h-5 w-5 text-[#48cae4]" />
          <span>Vacation Planner</span>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Vacation Planner. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/terms" className="text-sm hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};
