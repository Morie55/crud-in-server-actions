import Link from "next/link";

export default function Home() {
  return (
    <div className="p">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black">Post list</h1>
        <Link href={"/posts"} className="px-6 py-4 bg-blue-600">
          go to posts
        </Link>
      </div>
    </div>
  );
}
