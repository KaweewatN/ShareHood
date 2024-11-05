interface CategoryButtonProps {
  icons: React.ReactNode;
  name: string;
  onClick?: () => void;
}

export default function CategoryButton({icons, name, onClick}: CategoryButtonProps) {
  return (
    <button
      className="relative flex cursor-pointer flex-col items-center justify-center focus:outline-none"
      onClick={onClick}
    >
      <div className="flex items-center justify-center rounded-full border-[.1rem] border-defaultGrayBorder p-3 lg:p-4">
        <span className="text-2xl text-defaultBlue">{icons}</span>
      </div>
      <p className="absolute -bottom-5 text-tiny text-gray-500">{name}</p>
    </button>
  );
}
