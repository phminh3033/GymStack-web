const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentsModel = new Schema({
    studentId: { type: String, required: true, },
    fullName: { type: String, required: true, },
    phone: { type: Number, required: true, },
    email: { type: String, required: true, },
    weight: { type: Number, required: true, },
    height: { type: Number, required: true, },
}, {
    _id: false,
    timestamps: true,
});

module.exports = mongoose.model('StudentsModel', StudentsModel);