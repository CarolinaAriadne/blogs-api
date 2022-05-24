const category = require('../services/createCategory');

const createCategory = async (req, res, next) => {
    try {
      const { name } = req.body;
      const newCategory = await category.newCategory(name);

      return res.status(201).json(newCategory);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = {
      createCategory,
  };