const express = require("express");
const beInstructor = require('../Models/beinstructor.model');
require('dotenv').config();



// publish a instructor
exports.AddAnInstructor = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const beinstructor = await beInstructor.create(data);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
            data:beinstructor
        });
    } catch (error) {
        res.json(error);
    }
}


// get single instructor
exports.getAnInstructor = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id }
        const instructor = await beInstructor.findOne(query);
        return res.status(200).json(instructor);
    } catch (err) {
        res.status(404).json(err.message);
    }
}

// get all instructors
exports.getAllinstructors = async (req, res) => {
    const query = {};
    const instructors = await beInstructor.find(query);
    res.send(instructors)
}


// delete a instructor
exports.deleteAnInstructor = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const query = { _id: id };
        // console.log(query);
        const result = await beInstructor.deleteOne(query);
        res.send(result)
    } catch (err) {
        res.status(404).json(err);
    }
}


// approve an instructor
exports.approveAnInstructor = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const filter = { _id: id };
        const options = { upsert: true };
        const updateDoc = {
            $set: { status: 'approve' }
        };
        const result = await beInstructor.updateOne(filter, updateDoc, options);
        res.send(result);
    } catch (err) {
        res.status(404).json(err);
    }
}

