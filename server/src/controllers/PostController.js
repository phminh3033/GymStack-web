import { PostsModel } from "../models/PostsModel.js";

export const getPosts = async (req, res, next) => {
    try {
        const posts = await PostsModel.find();
        console.log("Posts", posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPosts = (req, res, next) => {
    res.send("Create Post");
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
