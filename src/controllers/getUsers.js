const getUser = require('../services/getUsers');

const getUsersService = async (req, res, next) => {
    try {
        const getToken = req.headers.authorization;

        const users = await getUser.getUsers(getToken);

        return res.status(200).json(users);
    } catch (err) {
        next({ status: 401, message: 'Expired or invalid token' });
    }
};

module.exports = {
    getUsersService,
};