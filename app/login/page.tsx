import { Compass } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <section className="h-screen flex flex-col bg-[#1e293b] text-[#f1f5f9] px-4">
      <div className="container mx-auto">
        <Link
          className="flex items-center h-16 gap-2 font-bold text-xl"
          href="/"
        >
          <Compass className="h-7 w-7 text-[#0077b6]" />
          <span>Vacation Planner</span>
        </Link>
      </div>
      <div className="border-2 flex-1 flex items-center justify-center"></div>
    </section>
  );
}
