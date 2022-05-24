const getUser = require('../services/getUsers');

const getUsers = async (_req, res, next) => {
  try {
    const users = await getUser.getUsers();

    return res.status(200).json(users);
  } catch (err) {
    next();
  }
};

module.exports = {
  getUsers,
};
