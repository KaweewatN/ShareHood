"use client";

import {Input} from "@components/shad.ui/input";

// Interface SearchBarProps {
//   Query: string;
//   SetQuery: (query: string) => void;
//   ClassName?: string;
// }

export default function SearchBar() {
  return (
    <div className="bg-defaultWhite flex max-w-md overflow-hidden rounded-3xl border-[1.5px] border-slate-200 pl-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192.904 192.904"
        width="16px"
        className="mr-3 rotate-90 fill-gray-600"
      >
        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
      </svg>
      <Input
        type="text"
        // Value={query}
        // OnChange={(e) => setQuery(e.target.value.replace(/\s+/g, ""))}
        placeholder="Search nearby things for rent"
        className="-ml-3 w-full min-w-52 max-w-sm rounded-3xl border-0 border-transparent bg-transparent text-gray-600 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}
