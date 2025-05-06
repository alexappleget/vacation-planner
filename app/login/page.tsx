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
      <div className="border-2 flex-1 flex items-center justify-center">
        <Card className="mx-auto max-w-md w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Log in</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
              <div className="text-right text-sm">
                <Link
                  href="/forgot-password"
                  className="text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full">Log in</Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
