import {Avatar, AvatarFallback, AvatarImage} from "@components/shad.ui/avatar";

export default function ProfileImage({
  image,
  fallback,
  classname,
}: {
  image: string;
  fallback: string;
  classname?: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={image} alt="@shadcn" className={classname} />
      <AvatarFallback className="text-defaultPurple">{fallback}</AvatarFallback>
    </Avatar>
  );
}
