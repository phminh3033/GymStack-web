import express from "express";

import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
} from "../controllers/PostController.js";

import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", authAdmin, createPost);
router.patch("/:id", authAdmin, updatePost);
router.delete("/:id", authAdmin, deletePost);
router.patch("/:id/likePost", likePost);

export default router;
