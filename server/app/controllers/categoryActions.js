const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categories = await tables.category.browse();

    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};
const read = async (req, res, next) => {
  const { id } = req.params;

  try {
    const category = await tables.category.read(id);

    if (category == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;

  try {
    await tables.category.delete(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  destroy,
};
