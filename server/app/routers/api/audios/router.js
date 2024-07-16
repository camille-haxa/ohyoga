const express = require("express");

const router = express.Router();

// import audio-related actions
const { browse, read, add } = require("../../../controllers/audioActions");

router.get("/", browse);
router.get("/:id", read);
router.post("/", add);

module.exports = router;
