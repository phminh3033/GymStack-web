import express from "express";

// import postController from "../controllers/PostController.js";
import { getPosts, createPosts } from "../controllers/PostController.js";

const router = express.Router();

router.post("/", createPosts);
router.get("/", getPosts);

// router.get("/", postController.show);

export default router;
