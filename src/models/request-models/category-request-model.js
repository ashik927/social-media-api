const Joi = require("joi");

const schema = Joi.array().items(
    Joi.object().keys({
        name: Joi.string().required(),
        status: Joi.number().required(),
        tax: Joi.object().allow(null).optional(),
        client_id: Joi.number().required(),
    }));

const validate = (data) => {
    const result = schema.validate(data );
    result.value = data;
    return result;
};

module.exports = validate;