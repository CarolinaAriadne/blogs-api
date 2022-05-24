const categories = require('../services/getCategories');

const getCategories = async (_req, res, next) => {
  try {
    const allCategories = await categories.getCategories();

    return res.status(200).json(allCategories);
  } catch (err) {
    next();
  }
};

module.exports = {
  getCategories,
};
