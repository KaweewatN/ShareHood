import CategoryButton from "@components/hood.ui/CategoryButton";
import Icons from "@components/icons/icons";

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
      <div className="flex justify-between">
        <p className="text-sm font-semibold">Category</p>
        <p className="cursor-pointer text-sm font-semibold text-defaultBlue hover:underline">
          More
        </p>
      </div>
      <div className="flex justify-center space-x-3">
        {allIcons?.map((icons: React.ReactNode, index: number) => (
          <CategoryButton icons={icons} key={index} />
        ))}
      </div>
    </div>
  );
}
