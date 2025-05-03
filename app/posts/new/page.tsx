"use client";
import { createPost } from "@/app/_actions/postActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePost = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const HandleSubmit = async () => {
    try {
      setLoading(true);
      const data = {
        title: title,
        desc: desc,
      };

      const result = await createPost(data);

      // router.push(`/posts/${result.data._id}`);

      if (result.success) {
        router.push(`/posts`);
        router.refresh();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[40%]">
        <h1 className="text-4xl font-black">Create post</h1>

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
            {desc}
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
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
