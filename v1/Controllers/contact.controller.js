const express = require("express");
const Contact = require('../Models/contact.model');
require('dotenv').config();



// publish a contact
exports.addAContact = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const contacts = await Contact.create(data);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
            data:contacts
        });
    } catch (error) {
        res.json(error);
    }
}

// get all contacts
exports.getAllContact = async (req, res) => {
    const query = {};
    const contacts = await Contact.find(query);
    res.send(contacts)
}


// delete a contact
exports.deleteAContact = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const query = { _id: id };
        // console.log(query);
        const result = await Contact.deleteOne(query);
        res.send(result)
    } catch (err) {
        res.status(404).json(err);
    }
}

