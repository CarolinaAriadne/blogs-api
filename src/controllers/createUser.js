const newUser = require('../services/createUser');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await newUser.createUserService({
      displayName,
      email,
      password,
      image,
    });

    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
};
