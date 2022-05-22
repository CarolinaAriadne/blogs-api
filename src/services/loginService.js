const { User } = require('../database/models');
const token = require('../utils/generateJWT');

const erroHandler = (status, message) => ({
    status,
    message,
});

const getUser = async (email, password) => {
    const tokenDone = token(email);
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
        throw erroHandler(400, 'Invalid fields'); 
    }
    return tokenDone;
};

module.exports = {
    getUser,
};