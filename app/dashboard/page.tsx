"use client";

import { Button } from "@/Components/button/button";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { logOut } = useAuth();
  return (
    <p>
      Dashboard <Button onClick={logOut}>Log Out</Button>
    </p>
  );
}
