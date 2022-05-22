const login = require('../services/loginService');

  const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await login.getUser(email, password);

        return res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
};

module.exports = {
    loginUser,
};