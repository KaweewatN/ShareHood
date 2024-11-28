"use client";

import {useRouter} from "next/navigation";
import {Button} from "@components/shad.ui/button";

interface BackButtonProps {
  path: string;
  className?: string;
}

export default function BackButton({path, className}: BackButtonProps) {
  const router = useRouter();
  return (
    <div className={className}>
      <Button
        className="cursoe-po inter flex h-10 w-10 items-center justify-center rounded-full shadow-none"
        onClick={() => router.push(path)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </Button>
    </div>
  );
}
