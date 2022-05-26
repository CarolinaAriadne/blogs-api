const posts = require('../services/getPostId');

const getPostId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blogPostId = await posts.getPostId(id);

    return res.status(200).json(blogPostId);
  } catch (err) {
    next();
  }
};

module.exports = {
  getPostId,
};
