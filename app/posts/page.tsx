import Post from "@/components/Post";
import Link from "next/link";
import { getAllPosts } from "../_actions/postActions";

export default async function Home() {
  const posts: { id: string; title: string; content: string }[] =
    await getAllPosts();

  return (
    <main className="bg-white min-h-screen px-4 sm:px-6 lg:px-12 py-10">
      {/* Header section */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Post List
        </h1>
        <Link
          href="/posts/new"
          className="inline-block text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow transition-all text-center"
        >
          + Add New Post
        </Link>
      </header>

      {/* Posts grid */}
      {posts?.length > 0 ? (
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index: number) => (
            <Post key={index} post={post} />
          ))}
        </section>
      ) : (
        <div className="flex justify-center items-center mt-16">
          <p className="text-center text-gray-500 text-base sm:text-lg">
            No posts available.
          </p>
        </div>
      )}
    </main>
  );
}
