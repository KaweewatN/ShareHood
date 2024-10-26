interface CategoryButtonProps {
  icons: React.ReactNode;
}

export default function CategoryButton({icons}: CategoryButtonProps) {
  return (
    <div className="border-defaultGrayBorder rounded-full border-[.1rem] p-3">
      <span className="text-defaultBlue text-xl">{icons}</span>
    </div>
  );
}
