import mongoose from "mongoose";

const postsSchema = mongoose.Schema(
    {
        creator: { type: String },
        name: { type: String },
        title: { type: String, required: true },
        description: { type: String, required: true },
        videoID: { type: String, required: true },
        image: { type: String },
        type: { type: String, required: true },
        likes: { type: [String], default: [] },
    },
    {
        timestamps: true,
    }
);

// module.exports = mongoose.model("PostsModel", PostsModel);
const PostsModel = mongoose.model("PostsModel", postsSchema);

export default PostsModel;
