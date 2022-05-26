const joi = require('joi');

const validateBlogPost = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().required(),
});

const verifyBlogPost = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const { error } = validateBlogPost.validate({ title, content, categoryIds });
  
    if (error) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }
    next();
  };

  module.exports = {
    verifyBlogPost,
  };