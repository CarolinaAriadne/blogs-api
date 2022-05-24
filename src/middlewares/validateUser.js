const joi = require('joi');

const userValidate = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
    
});

const validateUserLogin = (req, res, next) => {
    const { email, password } = req.body;
    const { error } = userValidate.validate({ email, password });

    if (error) {
         return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const nameValidate = joi.object({
    name: joi.string().required().messages({
      'any.required': '"name" is required',
    }),
    
});

const verifyName = (req, _res, next) => {
    const { name } = req.body;
    const { error } = nameValidate.validate({ name });

    if (error) {
       return next({ status: 400, message: error.message });
    }
    next();
};

module.exports = {
    validateUserLogin,
    verifyName,
};