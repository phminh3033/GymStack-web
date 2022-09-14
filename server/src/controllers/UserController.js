//bcrypt is used to hash the password
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UsersModel from "../models/UsersModel.js";

export const signInUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await UsersModel.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist!" });
        }

        const isPassCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isPassCorrect) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            "secretUserKey",
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ error: err });
        res.status(500).json({
            message: "Something went wrong! Please try again",
        });
    }
};

export const signUpUser = async (req, res) => {
    const {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        height,
        weight,
    } = req.body;

    try {
        const existingUser = await UsersModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password don't match!" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UsersModel.create({
            email,
            password: hashedPassword,
            fullName: `${firstName} ${lastName}`,
            height,
            weight,
        });

        const token = jwt.sign(
            { email: result.email, id: result._id },
            "secretUserKey",
            { expiresIn: "1h" }
        );

        res.status(200).json({ result, token });
    } catch (err) {
        res.status(500).json({ error: err });
        res.status(500).json({
            message: "Something went wrong! Please try again",
        });
    }
};
