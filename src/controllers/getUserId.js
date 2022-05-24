const userId = require('../services/getUserId');

const getUserId = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await userId.getUserId(id);

        return res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getUserId,
};