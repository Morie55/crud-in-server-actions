"use client";

import { createPost } from "@/app/_actions/postActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePost = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await createPost({ title, desc });

      if (result.success) {
        router.push("/posts");
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create a New Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Post Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="desc"
              className="block text-sm font-medium text-gray-700"
            >
              Post Description
            </label>
            <textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter post description"
              required
              rows={5}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
