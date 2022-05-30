const { BlogPost, User } = require('../database/models');
const getPostId = require('./getPostId');

const erroHandler = (status, message) => ({
  status,
  message,
});

const changePost = async (id, title, content, email) => {
  const idUser = await User.findByPk(id);

  if (email !== idUser.dataValues.email) {
    throw erroHandler(401, 'Unauthorized user');
  }

  await BlogPost.update({ title, content }, { where: { id } });

  return getPostId.getPostId(id);
};

module.exports = {
  changePost,
};
