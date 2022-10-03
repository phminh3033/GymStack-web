//bcrypt is used to hash the password
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
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
            process.env.SECRET_USER_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ errorSignInUserController: err.message });
    }
};

export const signUpUser = async (req, res) => {
    const {
        email,
        phone,
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
            phone,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
            height,
            weight,
        });

        const token = jwt.sign(
            { email: result.email, id: result._id },
            process.env.SECRET_USER_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).json({ result, token });
    } catch (err) {
        res.status(500).json({ errorSignUpUserController: err.message });
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UsersModel.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ errorGetUserController: err.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await UsersModel.find().sort({ _id: -1 });
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ errorGetUsersController: err.message });
    }
};

export const getUsersBySearch = async (req, res) => {
    const { searchQuery } = req.query;
    try {
        const name = new RegExp(searchQuery, "i"); //flag ignore -> Test test TEST -> test
        const users = await UsersModel.find({ name: name });
        res.json({ data: users });
    } catch (err) {
        res.status(404).json({ errorGetUsersBySearchController: err.message });
    }
};

// export const updateUser = async (req, res) => {
//     const { id } = req.params;
//     const {
//         email,
//         phone,
//         password,
//         confirmPassword,
//         firstName,
//         lastName,
//         height,
//         weight,
//     } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).send("No user with that id: ", id);
//     }

//     if (password !== confirmPassword) {
//         return res.status(400).json({ message: "Password don't match!" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const updatedUser = await UsersModel.findByIdAndUpdate(id, update, {
//         new: true,
//     });

//     res.json(updatedUser);
// };

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No user with that id: ", id);
    }

    await UsersModel.findByIdAndRemove(id);
    res.json({ message: "User deleted successfully!" });
};
