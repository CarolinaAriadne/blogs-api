const { User } = require('../database/models');
require('dotenv').config();

const getUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: 'password' } });

  return allUsers;
};

module.exports = {
  getUsers,
};
