const express = require("express");

const router = express.Router();

// import user-related actions
const { browse, read, add } = require("../../../controllers/userActions");
const hashpassword = require("../../../services/hashPassword");
const userValidation = require("../../../services/validation/userValidation");

router.get("/", browse);
router.get("/:id", read);
router.post("/", userValidation, hashpassword, add);

module.exports = router;
