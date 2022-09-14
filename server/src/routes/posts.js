import express from "express";

import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
} from "../controllers/PostController.js";

import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router.get("/", authAdmin, getPosts);
router.post("/", authAdmin, createPost);
router.patch("/:id", authAdmin, updatePost);
router.delete("/:id", authAdmin, deletePost);

export default router;
