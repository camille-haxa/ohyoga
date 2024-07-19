const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  destroy,
} = require("../../../controllers/categoryActions");

router.get("/", browse);
router.get("/:id", read);
router.delete("/:id", destroy);

module.exports = router;
