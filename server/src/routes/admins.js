import express from "express";

import { signInAdmin, signUpAdmin } from "../controllers/AdminController.js";

const router = express.Router();

router.post("/signin", signInAdmin);
router.post("/signup", signUpAdmin);

export default router;
