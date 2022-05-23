const express = require('express');

const router = express.Router();

const { validateUserLogin } = require('./middlewares/validateUser');

const { verifyDisplayName, verifyEmail, 
verifyPassword, verifyImage } = require('./middlewares/validateCreateUser');

const { verifyToken } = require('./middlewares/validateToken');

const { loginUser } = require('./controllers/user');

const { createUser } = require('./controllers/createUser');

const { getUsersService } = require('./controllers/getUsers');

const { getUserId } = require('./controllers/getUserId');

router.post('/login', validateUserLogin, loginUser);
router.post('/user', verifyDisplayName, verifyEmail, verifyPassword, verifyImage, createUser);
router.get('/user', verifyToken, getUsersService);
router.get('/user/:id', verifyToken, getUserId);

module.exports = router;