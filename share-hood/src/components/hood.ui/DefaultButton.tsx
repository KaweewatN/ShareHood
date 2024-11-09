"use client";

import {Button} from "@components/shad.ui/button";

interface DefaultButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export default function DefaultButton({label, type, className, onClick}: DefaultButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="default"
      className={`${className} w-full rounded-2xl bg-defaultBgBlue p-5 text-white`}
    >
      {label}
    </Button>
  );
}
