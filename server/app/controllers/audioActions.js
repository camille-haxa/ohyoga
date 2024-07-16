/* eslint-disable camelcase */
const tables = require("../../database/tables");

// Browse - Read All
const browse = async (req, res, next) => {
  try {
    const audios = await tables.audio.readAll();
    res.json(audios);
  } catch (error) {
    next(error);
  }
};

// Read

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const audio = await tables.audio.read(id);

    if (audio == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(audio);
    }
  } catch (error) {
    next(error);
  }
};

// Add
const add = async (req, res, next) => {
  try {
    const { title, url, image, description, category_id } = req.body;
    const insertId = await tables.audio.create(
      title,
      url,
      image,
      description,
      category_id
    );

    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, add };
