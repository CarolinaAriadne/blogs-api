const { Category, BlogPost, User } = require('../database/models');
// require('dotenv').config();

const erroHandler = (status, message) => ({
  status,
  message,
});

const newBlogPostService = async ({ title, content, categoryIds, email }) => {
  const findUser = await User.findOne({ where: { email }, attributes: ['id'] });
  // console.log(findUser, 'passei aqui');
  const { id } = findUser.dataValues;
  // console.log(id, 'id');

  const categories = await Category.findAll({ where: { id: categoryIds } });
  //   console.log(newBlog, 'newBlog teste');

  if (categories.length !== categoryIds.length) {
    throw erroHandler(400, '"categoryIds" not found');
  }

  const newBlogPost = await BlogPost.create({ title, content, userId: id });
  console.log(newBlogPost, 'teste');
  // console.log(newBlogPost, 'passei aqui');
    await newBlogPost.addCategories(categoryIds);
  //  console.log(teste, 'teste');

  return newBlogPost;
};

module.exports = {
  newBlogPostService,
};
