const jwt = require('jsonwebtoken');
const { Category } = require('../database/models');
require('dotenv').config();

const erroHandler = (status, message) => ({
    status,
    message,
});

const newCategory = async (token, name) => {
    try {
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        throw erroHandler(401, 'Expired or invalid token');
    }

  const category = await Category.findOne({ where: { name } });

  return category;
};

module.exports = {
    newCategory,
};