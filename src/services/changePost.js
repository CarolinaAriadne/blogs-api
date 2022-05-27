const { BlogPost, User, Category } = require('../database/models');

const erroHandler = (status, message) => ({
  status,
  message,
});

const changePost = async (id, title, content, email) => {
  const idUser = await User.findByPk(id);
  console.log(idUser, 'aqui');
  // const { id } = idUser.dataValues;

  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (email !== idUser.dataValues.email) {
    throw erroHandler(401, 'Unauthorized user');
  }
  await BlogPost.update({ title, content }, { where: { id } });
};

module.exports = {
  changePost,
};
