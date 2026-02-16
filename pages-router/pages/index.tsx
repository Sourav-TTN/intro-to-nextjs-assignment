import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl flex-1 py-6 px-2">
      <h1 className="font-bold mb-4"> Next Pages Router</h1>
      <Link href={"/products"} className="underline text-rose-600 italic">
        {`->`} Products Page
      </Link>
    </div>
  );
}
