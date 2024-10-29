import CategoryButton from "@components/hood.ui/CategoryButton";
import Icons from "@components/icons/icons";

import {Button} from "@components/shad.ui/button";

export default function HomeCategory() {
  const allIcons: React.ReactNode[] = [
    Icons.headphones(),
    Icons.Cloth(),
    Icons.Subscription(),
    Icons.Car(),
    Icons.Shoes(),
  ];

  return (
    <div className="mt-5 flex w-full flex-col space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Category</p>
        <Button variant="link" className="text-sm font-semibold text-defaultBlue">
          More
        </Button>
      </div>
      <div className="flex justify-center space-x-3">
        {allIcons?.map((icons: React.ReactNode, index: number) => (
          <CategoryButton icons={icons} key={index} />
        ))}
      </div>
    </div>
  );
}
