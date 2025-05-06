import { ComponentProps, JSX } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export const Button = ({
  className,
  asChild = false,
  ...props
}: ComponentProps<"button"> & {
  asChild?: boolean;
}): JSX.Element => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn("hover:cursor-pointer", className)}
      {...props}
    />
  );
};
