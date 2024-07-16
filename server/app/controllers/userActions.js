/* eslint-disable camelcase */
const tables = require("../../database/tables");

// Browse - Read All
const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Read

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await tables.user.read(id);

    if (user == null) {
      res.sendDStatus(404);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

// Add
const add = async (req, res, next) => {
  try {
    const { name, email, password, role_id } = req.body;
    const insertId = await tables.user.create(name, email, password, role_id);

    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, add };
