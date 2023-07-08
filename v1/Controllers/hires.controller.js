const express = require("express");
const Hire = require('../Models/hires.model');
require('dotenv').config();



// publish a hire
exports.postHire = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const hires = await Hire.create(data);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
            data:hires
        });
    } catch (error) {
        res.json(error);
    }
}

// get all hires
exports.getAllHires = async (req, res) => {
    const query = {};
    const hires = await Hire.find(query);
    res.send(hires)
}


// delete a hire
exports.deleteAHire = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const query = { _id: id };
        // console.log(query);
        const result = await Hire.deleteOne(query);
        res.send(result)
    } catch (err) {
        res.status(404).json(err);
    }
}

