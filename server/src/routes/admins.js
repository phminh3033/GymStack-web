import express from "express";

import {
    signInAdmin,
    signUpAdmin,
    getAdmins,
    getAdminsBySearch,
} from "../controllers/AdminController.js";

import {
    getUsers,
    getUsersBySearch,
    deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

// "/admin"
router.get("/admins", getAdmins);
router.get("/admins/search", getAdminsBySearch);

router.get("/users", getUsers);
router.get("/users/search", getUsersBySearch);
router.delete("/users/:id", deleteUser);

router.post("/signin", signInAdmin);
router.post("/signup", signUpAdmin);

export default router;
