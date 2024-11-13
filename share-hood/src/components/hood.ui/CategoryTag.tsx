// components/CategoryTag.tsx
"use client";

import React from "react";
import { IconType } from "react-icons";

interface CategoryTagProps {
  label: string;
  icon?: IconType;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ label, icon: Icon }) => {
  return (
    <span className="inline-flex items-center justify-center min-w-[3rem] max-w-[8rem] px-1.5 py-0.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full shadow-sm border border-blue-200">
      {Icon && <Icon className="mr-1 text-blue-600" />}
      <span className="truncate">{label}</span>
    </span>
  );
};

export default CategoryTag;