import express from "express";

import {
    getPost,
    getPosts,
    getPostsNoPaginate,
    getPostsBySearch,
    createPost,
    updatePost,
    deletePost,
    likePost,
    commentPost,
    deleteCmt,
} from "../controllers/PostController.js";

import authAdmin from "../middleware/authAdmin.js";
import authUser from "../middleware/authUser.js";

const router = express.Router();

// "/posts"
router.get("/", getPosts);
router.get("/no-paginate", getPostsNoPaginate);
// router.get("/:type", getRecommendPosts);
router.get("/:type/:id", getPost);
router.get("/search", getPostsBySearch);

router.post("/", authAdmin, createPost);
router.patch("/:id", authAdmin, updatePost);
router.delete("/:id", authAdmin, deletePost);
router.patch("/:id/likePost", authUser, likePost);
router.post("/:id/commentPost", authUser, commentPost);
router.delete("/:id/deleteCmt/:idCmt", authUser, deleteCmt);

export default router;
