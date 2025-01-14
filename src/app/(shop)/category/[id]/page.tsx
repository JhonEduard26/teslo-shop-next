import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (id === "kids") {
    notFound();
  }

  return (
    <div>
      <h2>Category {id}</h2>
    </div>
  );
}
