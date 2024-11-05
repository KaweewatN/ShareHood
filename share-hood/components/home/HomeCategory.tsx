import CategoryButton from "@components/hood.ui/CategoryButton";
import {HOME_CATEGORIES} from "../../constants/pageData";
import {Button} from "@components/shad.ui/button";

import Link from "next/link";

export default function HomeCategory() {
  return (
    <div className="mt-5 flex w-full flex-col space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Category</p>
        <Link href={"/browse"}>
          <Button variant="link" className="text-sm font-semibold text-defaultBlue">
            More
          </Button>
        </Link>
      </div>
      <div className="flex justify-center space-x-7 pb-5">
        {HOME_CATEGORIES?.map(({name, icon}, index: number) => (
          <CategoryButton icons={icon} name={name} key={index} />
        ))}
      </div>
    </div>
  );
}
