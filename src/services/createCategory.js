const { Category } = require('../database/models');
require('dotenv').config();

const newCategory = async (name) => {
   const newNameCreated = await Category.create({ name });
     
   return newNameCreated;
};

module.exports = {
    newCategory,
};