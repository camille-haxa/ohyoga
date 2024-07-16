const express = require("express");

const router = express.Router();

// import user-related actions
const { browse, read, add } = require("../../../controllers/userActions");

router.get("/", browse);
router.get("/:id", read);
router.post("/", add);

module.exports = router;
