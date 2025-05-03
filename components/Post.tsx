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
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="h-[300px] border border-gray-50 rounded-2xl p-4 ">
      <h1 className="text-xl font-semibold mb-4">{post?.title}</h1>
      <p>{post?.desc}</p>

      <div className="mt-6 flex items-center justify-between">
        <Link
          className="bg-blue-500 px-4 py-3 "
          href={`/posts/edit/${post?._id}`}
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 px-4 py-3 cursor-pointer "
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default Post;
