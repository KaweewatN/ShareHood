// components/CategoryTag.tsx
"use client";

import React from "react";
import {IconType} from "react-icons";

interface CategoryTagProps {
  label: string;
  icon?: IconType;
}

function CategoryTag({label, icon: Icon}: CategoryTagProps) {
  return (
    <span className="inline-flex min-w-[3rem] max-w-[8rem] items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-xs font-semibold text-blue-600 shadow-sm">
      {Icon && <Icon className="mr-1 text-blue-600" />}
      <span className="truncate">{label}</span>
    </span>
  );
}

export default CategoryTag;
