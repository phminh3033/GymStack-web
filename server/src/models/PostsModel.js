import mongoose from "mongoose";

const postsSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        // videoID: { type: String, required: true },
        // type: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// module.exports = mongoose.model("PostsModel", PostsModel);
const PostsModel = mongoose.model("PostsModel", postsSchema);

export default PostsModel;
