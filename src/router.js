const express = require('express');

const router = express.Router();

const { validateUserLogin } = require('./middlewares/validateUser');

const { verifyDisplayName, verifyEmail, 
verifyPassword, verifyImage } = require('./middlewares/validateCreateUser');

const { loginUser } = require('./controllers/user');

const { createUser } = require('./controllers/createUser');

router.post('/login', validateUserLogin, loginUser);
router.post('/user', verifyDisplayName, verifyEmail, verifyPassword, verifyImage, createUser);

module.exports = router;