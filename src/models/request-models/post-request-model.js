const Joi = require("joi");

const schema = 
    Joi.object().keys({
        userID: Joi.number().required(),
        murmur: Joi.string().required(),
        likeCount: Joi.number().required(),
    });

const validate = (data) => {
    const result = schema.validate(data );
    result.value = data;
    return result;
};

module.exports = validate;