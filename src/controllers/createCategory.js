const category = require('../services/createCategory');

const createCategory = async (req, res, next) => {
    try {
      const getToken = req.headers.authorization;
      const { name } = req.body;

      const newCategory = await category.newCategory(getToken, name);

      return res.status(201).json(newCategory);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = {
      createCategory,
  };