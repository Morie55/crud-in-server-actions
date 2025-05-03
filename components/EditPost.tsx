"use client";
import { createPost, updatePostById } from "@/app/_actions/postActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditPost = ({ post }: any) => {
  const router = useRouter();
  const [title, setTitle] = useState(post.title);
  const [desc, setDesc] = useState(post.desc);
  const [loading, setLoading] = useState(false);

  const HandleSubmit = async () => {
    try {
      setLoading(true);
      const data = {
        title: title,
        desc: desc,
        id: post._id,
      };

      const result = await updatePostById(data);

      router.push(`/posts`);
      router.refresh();

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[40%]">
        <h1 className="text-4xl font-black">Edit post</h1>

        <div className="mt-8 bg-slate-600 p-4 space-y-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="">post Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-4 rounded-2xl"
              type="text"
              placeholder="Post title"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Post Description</label>

            <textarea
              className="w-full min-h-[100px] border p-4 rounded-2xl"
              placeholder="Post Description"
              name=""
              id=""
              value={desc}
              onChange={(e) => setDesc(e.currentTarget.value)}
            ></textarea>
          </div>

          <button
            disabled={loading}
            onClick={HandleSubmit}
            className="bg-blue-500 px-4 py-3 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-400  "
          >
            {loading ? "Updating..." : "Updatde"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditPost;
