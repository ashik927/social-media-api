const postValidate = require('./post-request-model')
const followValidate = require('./follow-request-model')
const likeValidate = require('./likes-request-model')
const authValidate = require('./auth-request-model')



const validators = {
    postSchemaValidate: postValidate,
    followSchemaValidate: followValidate,
    likesSchemaValidate :likeValidate,
    authSchemaValidate :authValidate
    
};

module.exports = validators;

