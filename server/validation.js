const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(4).max(16).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\W]{8,64}$/)
      .required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\W]{8,64}$/)
      .required(),
  });
  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation
};
