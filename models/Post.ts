import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
    default: "",
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
