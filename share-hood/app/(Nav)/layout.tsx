import NavBar from "@components/hood.ui/NavBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="flex w-full flex-col items-center space-y-8 overflow-hidden px-6 pb-10 pt-20 md:pt-24">
        {children}
      </main>
    </>
  );
}
