import express from "express";

import {
    signInUser,
    signUpUser,
    getUser,
} from "../controllers/UserController.js";

const router = express.Router();

// "/user"
router.get("/:id", getUser);

router.post("/signin", signInUser);
router.post("/signup", signUpUser);

// router.patch("/:id", updateUser);

export default router;
