import mongoose from "mongoose";
import PostsModel from "../models/PostsModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostsModel.find();

        console.log("Posts", posts);
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ error: err });
    }
};

export const createPost = async (req, res) => {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const newPost = new PostsModel(req.body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ error: err });
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    const update = {
        ...post,
        image: `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`,
    };

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with that id: " + _id);
    }

    const updatedPost = await PostsModel.findByIdAndUpdate(_id, update, {
        new: true,
    });

    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No post with that id: " + _id);
    }

    await PostsModel.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully!" });
};
