import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between pb-4 mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800">Post List</h1>
        <Link
          href="/posts"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-200"
        >
          Go to Posts
        </Link>
      </div>
      {/* You can place additional content here if needed */}
    </div>
  );
}
