const mongoose = require("mongoose");
const validator = require("validator");


const contactSchema = mongoose.Schema(
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
        subject: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
    }

);


const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;