"use client";

import { Button } from "@/Components/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/card/card";
import { Input } from "@/Components/input/input";
import { Label } from "@/Components/label/label";
import { useAuth } from "@/context/AuthContext";
import { Compass } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const { signUp } = useAuth();
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = async () => {
    await signUp({ name, email, password, confirmPassword });
    router.push("/onboarding");
  };

  return (
    <section className="min-h-screen flex flex-col px-4">
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
        <Card className="mx-auto max-w-md w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an Account</CardTitle>
            <CardDescription>
              Fill out the information below to create your account and start
              planning your dream vacation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="John Smith"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input
                id="password"
                required
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              className="w-full border-2 p-2 rounded-lg"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
