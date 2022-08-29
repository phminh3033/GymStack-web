import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        // type: { type: String, required: true },
        // images: { type: [String], required: true },
    },
    {
        timestamps: true,
    }
);

// module.exports = mongoose.model("PostsModel", PostsModel);
export const PostsModel = mongoose.model("PostsModel", postsSchema);
