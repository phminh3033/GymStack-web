import express from "express";

// import postController from "../controllers/PostController.js";
import {
    getPosts,
    createPost,
    updatePost,
} from "../controllers/PostController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.patch("/:id", updatePost);

// router.get("/", postController.show);

export default router;
