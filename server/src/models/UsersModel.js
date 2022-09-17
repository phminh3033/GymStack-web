import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        weight: { type: Number, required: true },
        height: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const UsersModel = mongoose.model("UsersModel", usersSchema);

export default UsersModel;
