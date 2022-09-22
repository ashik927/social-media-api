const Joi = require("joi");

const schema = 
    Joi.object().keys({
        name: Joi.string().required(),
        userName: Joi.string(),
        password: Joi.string().required(),
        email: Joi.string().required(),
    });

const validate = (data) => {
    const result = schema.validate(data );
    result.value = data;
    return result;
};

module.exports = validate;