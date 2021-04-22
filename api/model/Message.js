const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require("joi");

const Message = new Schema ({
    name: {
        type: String,
        required: true,
        maxLength: 100,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxLength: 500,
        trim: true
    },
    message: {
        type: String,
        required: true,
        maxLength: 300,
        trim: true
    }
});

const validateMessage = (data) => {
    const schema = Joi.object({
        name: Joi.string().max(100).required(),
        email: Joi.string().max(500).required().email(),
        message: Joi.string().max(300).required(),
    });
    
    return schema.validate(data);
}

module.exports = {
    Message: mongoose.model("Message", Message),
    messageValidator: validateMessage
}