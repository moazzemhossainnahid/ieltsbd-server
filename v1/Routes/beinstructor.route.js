const express = require("express");
const beInstructorController = require("../Controllers/beinstructor.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();

// add an instructor
router.post("/", beInstructorController.AddAnInstructor);

// get all instructors
router.get("/", beInstructorController.getAllinstructors);

// get single instructor
router.get("/:id", beInstructorController.getAnInstructor);

// delete an instructor
router.delete("/:id", beInstructorController.deleteAnInstructor);

// approve an instructor
router.put("/:id", beInstructorController.approveAnInstructor);



module.exports = router;