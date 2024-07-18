const express = require("express");

const router = express.Router();

// import audio-related actions
const {
  browse,
  read,
  add,
  destroy,
} = require("../../../controllers/audioActions");

router.get("/", browse);
router.get("/:id", read);
router.post("/", add);
router.delete("/:id", destroy);

module.exports = router;
