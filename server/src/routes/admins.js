import express from "express";

import { signInAdmin, signUpAdmin } from "../controllers/AdminController.js";

import {
    getUsers,
    getUsersBySearch,
    deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

// "/admin"
router.post("/users", getUsers);
router.get("/users/search", getUsersBySearch);
router.delete("/users/:id", deleteUser);

router.post("/signin", signInAdmin);
router.post("/signup", signUpAdmin);

export default router;
