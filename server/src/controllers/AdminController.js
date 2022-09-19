//bcrypt is used to hash the password
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AdminsModel from "../models/AdminsModel.js";

export const signInAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingAdmin = await AdminsModel.findOne({ email });

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
            {
                email: existingAdmin.email,
                id: existingAdmin._id,
                name: existingAdmin.name,
            },
            process.env.SECRET_ADMIN_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: existingAdmin, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
        // res.status(500).json({
        //     message: "Something went wrong! Please try again",
        // });
    }
};

export const signUpAdmin = async (req, res) => {
    const { email, phone, password, confirmPassword, firstName, lastName } =
        req.body;

    try {
        const existingAdmin = await AdminsModel.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists!" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password don't match!" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await AdminsModel.create({
            email,
            phone,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
        });

        const token = jwt.sign(
            { email: result.email, id: result._id, name: result.name },
            process.env.SECRET_ADMIN_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).json({ result, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
