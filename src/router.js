const express = require('express');

const router = express.Router();

const { validateUserLogin, verifyName } = require('./middlewares/validateUser');

const { verifyDisplayName, verifyEmail, 
verifyPassword, verifyImage } = require('./middlewares/validateCreateUser');

const { verifyToken } = require('./middlewares/validateToken');

const { verifyBlogPost } = require('./middlewares/validateBlogPost');

const { loginUser } = require('./controllers/user');

const { createUser } = require('./controllers/createUser');

const { getUsers } = require('./controllers/getUsers');

const { getUserId } = require('./controllers/getUserId');

const { createCategory } = require('./controllers/createCategory');

const { getCategories } = require('./controllers/getCategories');

const { newBlogPostController } = require('./controllers/newBlogPost');

const { getPosts } = require('./controllers/getPosts');

const { getPostId } = require('./controllers/getPostId');

const { changePost } = require('./controllers/ changePost');

const { verifyChangePost } = require('./middlewares/validateChangePost');

router.post('/login', validateUserLogin, loginUser);
router.post('/user', verifyDisplayName, verifyEmail, verifyPassword, verifyImage, createUser);
router.get('/user', verifyToken, getUsers);
router.get('/user/:id', verifyToken, getUserId);
router.post('/categories', verifyToken, verifyName, createCategory);
router.get('/categories', verifyToken, getCategories);
router.post('/post', verifyToken, verifyBlogPost, newBlogPostController);
router.get('/post', verifyToken, getPosts);
router.get('/post/:id', verifyToken, getPostId);
router.put('/post/:id', verifyToken, verifyChangePost, changePost);

module.exports = router;