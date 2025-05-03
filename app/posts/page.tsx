import Post from "@/components/Post";
import Link from "next/link";
import { getAllPosts } from "../_actions/postActions";

export default async function Home() {
  const posts: any = await getAllPosts();

  return (
    <div className="p">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black">Post list</h1>
        <Link href={"/posts/new"} className="px-6 py-4 bg-blue-600">
          Add new post
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {posts.map((post: any, i: number) => (
          <Post key={i} post={post} />
        ))}
      </div>
    </div>
  );
}
