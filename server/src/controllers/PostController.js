import mongoose from "mongoose";
import PostsModel from "../models/PostsModel.js";

//query -> /posts?page=1 -> page = 1
//params -> /posts/:id -> /posts/123 -> id = 123

export const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostsModel.findById(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ errorGetPostController: err.message });
    }
};

export const getPosts = async (req, res) => {
    const { page } = req.query;
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
        const total = await PostsModel.countDocuments({});
        const posts = await PostsModel.find()
            .sort({ _id: -1 })
            .limit(LIMIT)
            .skip(startIndex);
        //sort: give us the newest post first
        //limit: make sure to only give ? post/page
        //skip: skip all the previous pages
        res.status(200).json({
            data: posts,
            currentPage: Number(page),
            numberOfPages: Math.ceil(total / LIMIT),
        });
    } catch (err) {
        res.status(404).json({ errorGetPostsController: err.message });
    }
};

// export const getRecommendPosts = async (req, res) => {
//     const { type } = req.params;
//     try {
//         const post = await PostsModel.find(type);
//         res.status(200).json(post);
//     } catch (err) {
//         res.status(404).json({ errorGetRecommendPostsController: err.message });
//     }
// };

export const getPostsBySearch = async (req, res) => {
    const { searchQuery } = req.query;
    try {
        const title = new RegExp(searchQuery, "i"); //flag ignore -> Test test TEST -> test
        const posts = await PostsModel.find({ title: title });
        res.json({ data: posts });
    } catch (err) {
        res.status(404).json({ errorGetPostsBySearchController: err.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    post.image = `https://img.youtube.com/vi/${post.videoID}/sddefault.jpg`;
    const newPost = new PostsModel({ ...post, creator: req.adminId });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ errorCreatePostController: err.message });
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    const update = {
        ...post,
        image: `https://img.youtube.com/vi/${post.videoID}/sddefault.jpg`,
    };

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with that id: ", _id);
    }

    const updatedPost = await PostsModel.findByIdAndUpdate(_id, update, {
        new: true,
    });

    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No post with that id: ", id);
    }

    await PostsModel.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully!" });
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated!" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No post with that id: ", id);
    }

    const post = await PostsModel.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        //like
        post.likes.push(req.userId);
    } else {
        //dislike
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostsModel.findByIdAndUpdate(id, post, {
        new: true,
    });

    res.json(updatedPost);
};
