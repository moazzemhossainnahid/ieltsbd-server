const mongoose = require("mongoose");
const validator = require("validator");

const hiresSchema = mongoose.Schema(
    {
        usersName: {
            type: String,
            trim: true,
        },
        usersEmail: {
            type: String,
            trim: true,
        },
        instructorName: {
            type: String,
            trim: true,
        },
        instructorEmail: {
            type: String,
            trim: true,
        },
        instructorPhone: {
            type: String,
            trim: true,
        },
        instructorAddress: {
            type: String,
            trim: true,
        },
        instructorImage: {
            type: String,
            trim: true,
        },
        instructorGender: {
            type: String,
            trim: true,
        },
        instructorSpeciality: {
            type: String,
            trim: true,
        },
        instructorLevel: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }

);


const Hire = mongoose.model("hire", hiresSchema);

module.exports = Hire;