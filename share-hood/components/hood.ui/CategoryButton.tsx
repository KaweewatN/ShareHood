interface CategoryButtonProps {
  icons: React.ReactNode;
}

export default function CategoryButton({icons}: CategoryButtonProps) {
  return (
    <div className="rounded-full border-[.1rem] border-defaultGrayBorder p-3">
      <span className="text-xl text-defaultBlue">{icons}</span>
    </div>
  );
}
