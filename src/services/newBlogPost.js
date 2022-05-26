const { Category, BlogPost, User } = require('../database/models');

const erroHandler = (status, message) => ({
  status,
  message,
});

const newBlogPostService = async ({ title, content, categoryIds, email }) => {
  const findUser = await User.findOne({ where: { email }, attributes: ['id'] });

  const { id } = findUser.dataValues;

  const categories = await Category.findAll({ where: { id: categoryIds } });

  if (categories.length !== categoryIds.length) {
    throw erroHandler(400, '"categoryIds" not found');
  }

  const newBlogPost = await BlogPost.create({ title, content, userId: id });

  await newBlogPost.addCategories(categoryIds);

  return newBlogPost;
};

module.exports = {
  newBlogPostService,
};
