import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to ShareHood!</h1>
      <Image src="/logo.png" alt="ShareHood logo" width={200} height={200} />
    </div>
  );
}
