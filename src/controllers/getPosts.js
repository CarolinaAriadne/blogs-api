const posts = require('../services/getPosts');

const getPosts = async (_req, res, next) => {
  try {
    const postsUsersCategories = await posts.getPosts();

    return res.status(200).json(postsUsersCategories);
  } catch (err) {
    next();
  }
};

module.exports = {
  getPosts,
};
