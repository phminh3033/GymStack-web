import mongoose from "mongoose";

const adminsSchema = mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// module.exports = mongoose.model("AdminsModel", AdminsModel);
const AdminsModel = mongoose.model("AdminsModel", adminsSchema);

export default AdminsModel;
