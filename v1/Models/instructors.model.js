const mongoose = require("mongoose");
const validator = require("validator");


const instructorsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "name is required"],
        },
        title: {
            type: String,
            trim: true,
            unique: false,
            required: [true, "title is required"],
        },
        email: {
            type: String,
            unique: false,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        gender: {
            type: String,
            trim: true,
        },
        img: {
            type: String,
            trim: true,
        },
        professionLevel: {
            type: String,
            trim: true,
        },
        teacherCategory: {
            type: String,
            trim: true,
        },
        totalTechingExp: {
            type: Number,
            trim: true,
        },
        techingType: {
            type: String,
            trim: true,
        },
        specialist: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        education: {
            type: Array,
            trim: true,
        },
        feeDetails: {
            type: Number,
            trim: true,
        },
        social_link: {
            type: Object,
            trim: true,
        },
        status: {
            type: String,
            default: "active",
            enum: ["active", "deactive"],
        }
    },
    {
        timestamps: true,
    }

);


const Instructors = mongoose.model("instructors", instructorsSchema);

module.exports = Instructors;