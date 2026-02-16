import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl py-6 px-2 border">
      <h1 className="font-bold mb-4"> Next Pages Router</h1>
      <Link href={"/products"} className="underline text-rose-600 italic">
        {`->`} Products Page
      </Link>
    </div>
  );
}
