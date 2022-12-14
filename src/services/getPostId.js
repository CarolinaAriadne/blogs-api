const { BlogPost, User, Category } = require('../database/models');

const erroHandler = (status, message) => ({
  status,
  message,
});

const getPostId = async (id) => {
  const postUserId = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!postUserId) {
    throw erroHandler(404, 'Post does not exist');
  }

  return postUserId;
};

module.exports = {
  getPostId,
};
