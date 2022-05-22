const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateJWT = (user) => {
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);

    return token;
};

module.exports = {
    generateJWT,
};