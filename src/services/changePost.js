const { BlogPost, User, Category } = require('../database/models');

const erroHandler = (status, message) => ({
  status,
  message,
});

const changePost = async (id) => {
  const idUser = await User.findByPk(id);
  console.log(idUser, 'aqui');

  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (post.userId !== idUser.id) {
    throw erroHandler(401, 'Unauthorized user');
  }
  return post;
};

module.exports = {
  changePost,
};
