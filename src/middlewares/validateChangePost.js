const joi = require('joi');

const validateChangePost = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
});

const verifyChangePost = (req, res, next) => {
    const { title, content } = req.body;
    const { error } = validateChangePost.validate({ title, content });
  
    if (error) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }
    next();
  };

  module.exports = {
    verifyChangePost,
  };