import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl flex-1 py-6 px-2 border">
      <h1 className="font-bold mb-4"> Next App Router</h1>
      <Link href={"/recipies"} className="underline text-rose-600 italic">
        {`->`} Recipes Page
      </Link>
    </div>
  );
}
