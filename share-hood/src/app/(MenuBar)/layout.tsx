import Menubar from "@components/hood.ui/MenuBar";

import {authenticateUser} from "src/service/functions/NextAuthFunction";
import {redirect} from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await authenticateUser().catch(() => {
    redirect("/authentication");
  });

  return (
    <>
      <Menubar />
      <main className="flex w-full flex-col items-center space-y-8 overflow-hidden px-6 pb-24 pt-10">
        {children}
      </main>
    </>
  );
}
