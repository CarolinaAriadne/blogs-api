const { User } = require('../database/models');
const generateJWT = require('../utils/generateJWT');

const erroHandler = (status, message) => ({
    status,
    message,
});

const getUser = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    console.log(user, 'user service');

    if (!user) {
        throw erroHandler(400, 'Invalid fields'); 
    }
    const returnToken = generateJWT.generateJWT(email);
    return returnToken;
};

module.exports = {
    getUser,
};