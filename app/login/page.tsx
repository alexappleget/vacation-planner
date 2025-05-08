"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/card/card";
import { LoginButton } from "@/Components/LoginButton/LoginButton";
import { Compass } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <section className="h-screen flex flex-col px-4">
      <div className="container mx-auto border-b border-black">
        <Link
          className="flex items-center h-16 gap-2 font-bold text-xl"
          href="/"
        >
          <Compass className="h-7 w-7 text-black" />
          <span>Vacation Planner</span>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <CardDescription>
              Sign in with Google to access your meal plans
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <LoginButton className="w-full border-2 p-2 rounded-lg flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 533.5 544.3"
                className="h-6 w-6"
              >
                <path
                  fill="#4285F4"
                  d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.4H272v95.3h146.9c-6.3 34.1-25.1 63-53.6 82.2v68.1h86.7c50.8-46.9 81.5-116 81.5-195.2z"
                />
                <path
                  fill="#34A853"
                  d="M272 544.3c72.6 0 133.6-24 178.2-65.1l-86.7-68.1c-24.1 16.2-55 25.8-91.5 25.8-70.3 0-129.9-47.6-151.2-111.4H30.8v69.9c44.5 88.1 136.6 149 241.2 149z"
                />
                <path
                  fill="#FBBC05"
                  d="M120.8 325.5c-10.3-30.9-10.3-64.1 0-95.1V160.5H30.8c-41.4 82.9-41.4 180.4 0 263.3l90-69.9z"
                />
                <path
                  fill="#EA4335"
                  d="M272 107.7c39.5 0 75 13.6 103 40.2l77.1-77.1C405.6 24.6 344.6 0 272 0 167.4 0 75.3 60.9 30.8 149l90 69.9c21.3-63.9 80.9-111.4 151.2-111.4z"
                />
              </svg>

              <span className="font-medium">Continue with Google</span>
            </LoginButton>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground text-center w-full">
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
