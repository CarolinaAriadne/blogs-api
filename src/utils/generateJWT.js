const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateJWT = (email) => {
    const token = jwt.sign({ data: email }, process.env.JWT_SECRET, jwtConfig);
    console.log(token, 'token generateJWT');

    return token;
};

module.exports = {
    generateJWT,
};