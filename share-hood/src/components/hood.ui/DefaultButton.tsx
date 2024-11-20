"use client";

import {Button} from "@components/shad.ui/button";

interface DefaultButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function DefaultButton({
  label,
  type,
  className,
  disabled,
  onClick,
}: DefaultButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="default"
      disabled={disabled}
      className={`${className} w-full rounded-2xl bg-defaultBgBlue p-5 text-white`}
    >
      {label}
    </Button>
  );
}
