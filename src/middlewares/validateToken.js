const joi = require('joi');

const tokenSchema = joi.object({
    token: joi.string().required().messages({
        'any.required': 'Token not found',
        'string.empty': 'Token not found',
    }),
});

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    const { error } = tokenSchema.validate({ token });

    if (error) next({ status: 401, message: error.message });

    next();
};

module.exports = {
    verifyToken,
};
