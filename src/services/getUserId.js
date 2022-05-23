const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const erroHandler = (status, message) => ({
    status,
    message,
});

const getUserId = async (token, id) => {
    try {
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        throw erroHandler(401, 'Expired or invalid token');
    }

  const userId = await User.findByPk(id, { attributes: { exclude: 'password' } });

  if (!userId) {
    throw erroHandler(404, 'User does not exist');
}

  return userId;
};

module.exports = {
    getUserId,
};
