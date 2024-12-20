"use client";

interface CategoryButtonProps {
  icons: React.ReactNode;
  name: string;
  onClick?: () => void;
}

export default function CategoryButton({icons, name, onClick}: CategoryButtonProps) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick?.();
    }
  };

  return (
    <div
      className="relative flex cursor-pointer flex-col items-center justify-center focus:outline-none"
      onClick={onClick}
      onKeyUp={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-[.1rem] border-defaultGrayBorder md:h-14 md:w-14">
        <span className="text-xl text-defaultBlue lg:text-2xl">{icons}</span>
      </div>
      <p className="absolute -bottom-5 text-tiny text-gray-500">{name}</p>
    </div>
  );
}
