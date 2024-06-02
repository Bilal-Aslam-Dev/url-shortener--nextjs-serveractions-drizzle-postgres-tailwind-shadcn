"use client";

import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "./button";
import { LoaderPinwheel } from "lucide-react";

export type SubmitButtonProps = ButtonProps;

export default function SubmitButton({ ...props }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      {...props}
    >
      {props.children}
      {pending && <LoaderPinwheel className="ml-2 w-5 animate-spin" />}
    </Button>
  );
}
