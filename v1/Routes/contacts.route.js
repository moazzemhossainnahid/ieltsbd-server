const express = require("express");
const contactController = require("../Controllers/contact.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();

// add an contact
router.post("/", contactController.addAContact);

// get all contacts
router.get("/", contactController.getAllContact);

// delete an contact
router.delete("/:id", contactController.deleteAContact);



module.exports = router;