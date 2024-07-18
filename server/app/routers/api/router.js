const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

const audiosRouter = require("./audios/router");

router.use("/audios", audiosRouter);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

/* ************************************************************************* */

module.exports = router;
