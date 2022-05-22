const express = require('express');

const { validateUserLogin } = require('./middlewares/validateUser');
const { loginUser } = require('./controllers/user');

const router = express.Router();

router.post('/login', validateUserLogin, loginUser);

module.exports = router;