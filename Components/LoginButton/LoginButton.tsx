import { JSX, ReactElement } from "react";
import { Button } from "../button/button";

export const LoginButton = ({
  children,
}: {
  children: string | ReactElement<"span"> | ReactElement<"svg">;
}): JSX.Element => {
  const logInWithGoogle = async (): Promise<void> => {
    try {
      //   await signInWithGoogle({});
    } catch (error) {
      throw error;
    } finally {
    }
  };

  return <Button onClick={logInWithGoogle}>{children}</Button>;
};
