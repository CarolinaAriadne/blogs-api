const { User } = require('../database/models');
require('dotenv').config();

const erroHandler = (status, message) => ({
  status,
  message,
});

const getUserId = async (id) => {
  const userId = await User.findByPk(id, {
    attributes: { exclude: 'password' },
  });

  if (!userId) {
    throw erroHandler(404, 'User does not exist');
  }

  return userId;
};

module.exports = {
  getUserId,
};
