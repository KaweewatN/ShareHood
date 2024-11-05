"use client";

import {useRouter} from "next/navigation";

import {Button} from "@components/shad.ui/button";

import CategoryButton from "@components/hood.ui/CategoryButton";
import {FEATURE_CATEGORIES, CATEGORIES} from "constants/pageData";

interface BrowseTabProps {
  refetch: () => void;
}

export default function BrowseTab({refetch}: BrowseTabProps) {
  const router = useRouter();

  const setFilter = (tag: string | null) => {
    if (tag) {
      router.push("?tag=" + tag);
    }
    if (!tag) {
      router.push("/browse");
    }
  };

  const handleClick = (name: string | null) => {
    refetch();
    setFilter(name);
  };

  return (
    <div className="z-50 mt-6 h-full w-full bg-white pb-8">
      <div className="flex flex-col space-y-3 pb-14">
        <div className="flex w-full items-center justify-between">
          <p className="ml-5 font-semibold">Featured</p>
          <Button
            variant="link"
            onClick={() => handleClick(null)}
            className="text-sm text-gray-600"
          >
            Clear
          </Button>
        </div>
        <div className="grid w-full grid-cols-4 gap-y-10 whitespace-nowrap rounded-md border border-none">
          {FEATURE_CATEGORIES?.map((category, index) => (
            <CategoryButton
              key={index}
              icons={category.icon}
              name={category.name}
              onClick={() => handleClick(category.name)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <p className="ml-5 font-semibold">Categories</p>
        <div className="grid w-full grid-cols-4 gap-y-10 whitespace-nowrap rounded-md border border-none">
          {CATEGORIES?.map((category, index) => (
            <CategoryButton
              key={index}
              icons={category.icon}
              name={category.name}
              onClick={() => handleClick(category.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
