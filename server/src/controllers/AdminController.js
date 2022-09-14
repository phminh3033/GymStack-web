//bcrypt is used to hash the password
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AdminsModel from "../models/AdminsModel.js";

export const signInAdmin = async (req, res) => {
    const { phone, password } = req.body;

    try {
        const existingAdmin = await AdminsModel.findOne({ phone });

        if (!existingAdmin) {
            return res.status(404).json({ message: "Admin doesn't exist!" });
        }

        const isPassCorrect = await bcrypt.compare(
            password,
            existingAdmin.password
        );

        if (!isPassCorrect) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        const token = jwt.sign(
            { phone: existingAdmin.phone, id: existingAdmin._id },
            "secretAdminKey",
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: existingAdmin, token });
    } catch (err) {
        res.status(500).json({ error: err });
        res.status(500).json({
            message: "Something went wrong! Please try again",
        });
    }
};

export const signUpAdmin = async (req, res) => {
    const { phone, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingAdmin = await AdminsModel.findOne({ phone });

        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists!" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password don't match!" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await AdminsModel.create({
            phone,
            password: hashedPassword,
            fullName: `${firstName} ${lastName}`,
        });

        const token = jwt.sign(
            { phone: result.phone, id: result._id },
            "secretAdminKey",
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
