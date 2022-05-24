const { Category } = require('../database/models');
require('dotenv').config();

const getCategories = async () => {
  const allCategories = await Category.findAll();

  return allCategories;
};

module.exports = {
  getCategories,
};

// { attributes: { exclude: 'password' } }