import express from "express";

import {
    getPost,
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
} from "../controllers/PostController.js";

import authAdmin from "../middleware/authAdmin.js";
import authUser from "../middleware/authUser.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:type/:id", getPost);

router.post("/", authAdmin, createPost);
router.patch("/:id", authAdmin, updatePost);
router.delete("/:id", authAdmin, deletePost);
router.patch("/:id/likePost", authUser, likePost);

export default router;
