const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const getUsers = async (token) => {
//   jwt.verify(token);

  jwt.verify(token, process.env.JWT_SECRET);

  const allUsers = await User.findAll({ attributes: { exclude: 'password' } });

  return allUsers;
};

module.exports = {
    getUsers,
};
