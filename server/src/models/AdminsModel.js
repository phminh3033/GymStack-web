import mongoose from "mongoose";

const adminsSchema = mongoose.Schema(
    {
        id: { type: String, required: true },
        fullName: { type: String, required: true },
        phone: { type: Number, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// module.exports = mongoose.model("AdminsModel", AdminsModel);
const AdminsModel = mongoose.model("AdminsModel", adminsSchema);

export default AdminsModel;
