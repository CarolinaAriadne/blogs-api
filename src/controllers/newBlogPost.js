const newBlog = require('../services/newBlogPost');

const newBlogPostController = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const { email } = req.user;

    const newBlogPostCreated = await newBlog.newBlogPostService({
      title,
      content,
      categoryIds,
      email,
    });

    return res.status(201).json(newBlogPostCreated);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  newBlogPostController,
};
