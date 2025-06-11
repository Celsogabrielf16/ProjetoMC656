import Joi from 'joi';

export class UserValidator {
  public static validateLogin(data: { email: string; password: string }) {
    const schema = Joi.object({
      email: Joi.string()
        .email({ 
          minDomainSegments: 2,
          tlds: { allow: ['br'] }
        })
        .required()
        .pattern(/@dac\.unicamp\.br$/)
        .messages({
          'string.email': 'The email must be a valid address',
          'any.required': 'The email field is required',
          'string.empty': 'The email field cannot be empty',
          'string.pattern.base': 'The email must belong to the @dac.unicamp.br domain'
        }),
      password: Joi.string()
        .min(6)
        .required()
        .messages({
          'string.min': 'The password must be at least 6 characters long',
          'any.required': 'The password field is required',
          'string.empty': 'The password field cannot be empty'
        })
    });

    const { error } = schema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }
  }

  public static validateRegister(data: { name: string; email: string; password: string }) {
    const schema = Joi.object({
      name: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
          'string.min': 'The name must be at least 2 characters long',
          'string.max': 'The name must be at most 100 characters long',
          'string.empty': 'The name field cannot be empty',
          'any.required': 'The name field is required'
        }),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['br'] } })
        .required()
        .custom((value, helpers) => {
          if (!value.endsWith('@dac.unicamp.br')) {
            return helpers.error('string.pattern.base');
          }
          return value;
        })
        .messages({
          'string.email': 'The email must be a valid address',
          'any.required': 'The email field is required',
          'string.empty': 'The email field cannot be empty',
          'string.pattern.base': 'The email must belong to the @dac.unicamp.br domain'
        }),
      password: Joi.string()
        .min(6)
        .required()
        .messages({
          'string.min': 'The password must be at least 6 characters long',
          'any.required': 'The password field is required',
          'string.empty': 'The password field cannot be empty'
        })
    });

    const { error } = schema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }
  }

}
