const mongoose = require("mongoose");
const validator = require("validator");


const beInstructorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "name is required"],
        },
        email: {
            type: String,
            unique: false,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            default: "unactive",
            enum: ["active", "unactive"],
        }
    },
    {
        timestamps: true,
    }

);


const beInstructor = mongoose.model("beinstructor", beInstructorSchema);

module.exports = beInstructor;