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
}
