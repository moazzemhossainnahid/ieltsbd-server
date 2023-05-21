const express = require("express");
const instructorController = require("../Controllers/instructors.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();

// add an instructor
router.post("/", instructorController.AddAnInstructor);

// get all instructors
router.get("/", instructorController.getAllinstructors);

// get single instructor
router.get("/:id", instructorController.getAnInstructor);

// delete an instructor
router.delete("/:id", instructorController.deleteAnInstructor);

// approve an instructor
router.put("/:id", instructorController.approveAnInstructor);



module.exports = router;