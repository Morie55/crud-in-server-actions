"use server";

import { connect } from "@/lib/mongodb";
import Post from "@/models/Post";
// import { stringify } from "querystring";

interface PostData {
  title: string;
  content: string;
  author: string;
  // Add other fields as needed
}

export const createPost = async (data: PostData) => {
  try {
    await connect();

    const newPost = new Post(data);
    const savedPost = await newPost.save();
    const post = JSON.parse(JSON.stringify(savedPost));

    return {
      success: true,
      message: "Post created successfully",
      data: post,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error,
      message: "Faild to create post:",
    };
  }
};

export const getAllPosts = async () => {
  try {
    await connect();

    const postData = await Post.find();

    const posts = JSON.parse(JSON.stringify(postData));

    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (id: string) => {
  try {
    await connect();

    const postData = await Post.findById(id);
    const post = JSON.parse(JSON.stringify(postData));

    return post;
  } catch (error) {
    console.log(error);
  }
};

export const updatePostById = async (data: {
  id: string;
  title?: string;
  content?: string;
  author?: string;
}) => {
  try {
    await connect();

    await Post.findByIdAndUpdate(data.id, data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = async (id: string) => {
  try {
    await connect();

    await Post.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};
