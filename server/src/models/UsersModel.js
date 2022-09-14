import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
    {
        id: { type: String, required: true },
        fullName: { type: String, required: true },
        // phone: { type: Number, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        weight: { type: Number, required: true },
        height: { type: Number, required: true },
        bmi: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const UsersModel = mongoose.model("UsersModel", usersSchema);

export default UsersModel;
