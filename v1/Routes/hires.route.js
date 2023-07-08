const express = require("express");
const hiresController = require("../Controllers/hires.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();

// add an contact
router.post("/", hiresController.postHire);

// get all contacts
router.get("/", hiresController.getAllHires);

// delete an contact
router.delete("/:id", hiresController.deleteAHire);



module.exports = router;