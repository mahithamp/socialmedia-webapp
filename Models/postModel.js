import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String },
    likes: { type: [String], default: [] }, // array of userIds who liked the post
    image: { type: String },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
);

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
