import express from "express";

import {
    signInUser,
    signUpUser,
    getUser,
    updateUser,
} from "../controllers/UserController.js";

const router = express.Router();

// "/user"
router.get("/:id", getUser);
router.patch("/:id", updateUser);

router.post("/signin", signInUser);
router.post("/signup", signUpUser);

export default router;
