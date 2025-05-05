"use client";

import { deletePostById } from "@/app/_actions/postActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Post = ({ post }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deletePostById(post._id);
      router.refresh();
    } catch (error) {
      console.error("Failed to delete post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between h-[300px]">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 truncate">
          {post?.title}
        </h1>
        <p className="text-gray-600 text-sm line-clamp-4">{post?.desc}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link
          href={`/posts/edit/${post?._id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2 rounded-lg transition-colors duration-200"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          disabled={loading}
          className={`${
            loading
              ? "bg-red-300 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          } text-white font-medium text-sm px-5 py-2 rounded-lg transition-colors duration-200`}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default Post;
