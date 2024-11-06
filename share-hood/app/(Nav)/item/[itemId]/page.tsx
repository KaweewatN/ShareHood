export default async function Item({params}: {params: Promise<any>}) {
  const resolvedParams = await params;
  return <div>{resolvedParams}</div>;
}
