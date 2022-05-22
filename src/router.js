const express = require('express');

const { validateUser } = require('./middlewares/validateUser');
const { loginUser } = require('./controllers/user');

const router = express.Router();

router.post('/login', validateUser, loginUser);

module.exports = router;