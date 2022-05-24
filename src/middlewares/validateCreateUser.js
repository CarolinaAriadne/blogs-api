const joi = require('joi');

const validateDisplayName = joi.object({
  displayName: joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
});

const verifyDisplayName = (req, _res, next) => {
  const { displayName } = req.body;

  const { error } = validateDisplayName.validate({ displayName });

  if (error) next({ status: 400, message: error.message });

  next();
};

const validateEmail = joi.object({
  email: joi.string().email().required().messages({
    'any.required': '"email" must be a valid email',
  }),
});

const verifyEmail = (req, _res, next) => {
  const { email } = req.body;

  const { error } = validateEmail.validate({ email });

  if (error) next({ status: 400, message: error.message });

  next();
};

const validatepassword = joi.object({
  password: joi.string().required().min(6).messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
});

const verifyPassword = (req, _res, next) => {
  const { password } = req.body;

  const { error } = validatepassword.validate({ password });

  if (error) next({ status: 400, message: error.message });
  next();
};

const validateImage = joi.object({
  image: joi.string().required().uri(),
});

const verifyImage = (req, _res, next) => {
  const { image } = req.body;

  const { error } = validateImage.validate({ image });

  if (error) next({ status: 400, message: error.message });
  next();
};

module.exports = {
  verifyDisplayName,
  verifyEmail,
  verifyPassword,
  verifyImage,
};
