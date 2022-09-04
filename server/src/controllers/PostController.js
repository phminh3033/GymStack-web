import PostsModel from "../models/PostsModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostsModel.find();

        console.log("Posts", posts);
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostsModel(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
};

// class PostController {
//     //[GET] /
//     show(req, res, next) {
//         PostsModel.find({})
//             .then((posts) => res.json(posts))
//             .catch(next);
//     }
// }

// export default new PostController();
