const joi = require('joi');

const userValidate = joi.object({
    email: joi.string().required()
    .messages({     
    'any.required': '"Some required fields are missing"',
    }),
    password: joi.string().required()
    .messages({     
        'any.required': '"Some required fields are missing"',
        }),
    
});

const validateUserLogin = (req, res, next) => {
    const { email, password } = req.body;
    const { error } = userValidate.validate({ email, password });

    if (error) {
         return res.status(400).json({ message: error.message });
    }
    next();
};

module.exports = {
    validateUserLogin,
};