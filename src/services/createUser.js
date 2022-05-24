const { User } = require('../database/models');
const generateJWT = require('../utils/generateJWT');

const erroHandler = (status, message) => ({
  status,
  message,
});

const createUserService = async (dados) => {
  const user = await User.findOne({ where: { email: dados.email } });

  if (user) {
    throw erroHandler(409, 'User already registered');
  }
  await User.create(dados);

  const returnToken = generateJWT.generateJWT(dados.email);
  return returnToken;
};

module.exports = {
  createUserService,
};
