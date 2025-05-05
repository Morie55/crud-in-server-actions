"use client";

import { updatePostById } from "@/app/_actions/postActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditPost = ({ post }: any) => {
  const router = useRouter();
  const [title, setTitle] = useState(post.title);
  const [desc, setDesc] = useState(post.desc);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await updatePostById({ title, desc, id: post._id });
      router.push("/posts");
      router.refresh();
    } catch (error) {
      console.error("Failed to update post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Edit Post
        </h1>

        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Post Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="p-4 border border-gray-300 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="desc" className="text-sm font-medium text-gray-700">
              Post Description
            </label>
            <textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter post description"
              className="p-4 border border-gray-300 text-black rounded-xl min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full text-white font-semibold py-3 rounded-xl transition-colors duration-300 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Updating..." : "Update Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
