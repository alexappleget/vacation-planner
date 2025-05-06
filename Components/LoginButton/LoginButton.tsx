"use client";

import { JSX, ReactNode } from "react";
import { Button } from "../button/button";

export const LoginButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}): JSX.Element => {
  const logInWithGoogle = async (): Promise<void> => {
    try {
      //   await signInWithGoogle({});
    } catch (error) {
      throw error;
    } finally {
    }
  };

  return (
    <Button className={className} onClick={logInWithGoogle}>
      {children}
    </Button>
  );
};
