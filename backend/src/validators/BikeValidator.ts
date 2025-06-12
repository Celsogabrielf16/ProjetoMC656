import Joi from 'joi';
import { BikeToBeCreated } from '../types/bike';
    
export class BikeValidator {
  public static validate(data: BikeToBeCreated) {
    const schema = Joi.object({
      ownerId: Joi.number()
        .positive()
        .required()
        .messages({
          'number.base': 'O ID do proprietário deve ser um número',
          'number.positive': 'O ID do proprietário deve ser maior que 0',
          'any.required': 'O ID do proprietário é obrigatório',
        }),
      model: Joi.string()
        .min(1)
        .required()
        .messages({
          'string.base': 'O modelo deve ser uma string',
          'string.empty': 'O modelo é obrigatório',
          'string.min': 'O modelo deve ter pelo menos 1 caractere',
          'any.required': 'O modelo é obrigatório',
        }),
      description: Joi.string()
        .min(1)
        .required()
        .messages({
          'string.base': 'A descrição deve ser uma string',
          'string.empty': 'A descrição é obrigatória',
          'string.min': 'A descrição deve ter pelo menos 1 caractere',
          'any.required': 'A descrição é obrigatória',
        }),
      size: Joi.string()
        .pattern(/^\d+$/)
        .custom((value, helpers) => {
          const num = parseInt(value);
          if (num < 12 || num > 30) return helpers.error('size.range');
          return value;
        })
        .required()
        .messages({
          'string.empty': 'O tamanho é obrigatório',
          'string.pattern.base': 'O tamanho deve ser numérico',
          'any.required': 'O tamanho é obrigatório',
          'size.range': 'O tamanho deve estar entre 12 e 30',
        }),
      imagePath: Joi.string()
        .uri()
        .required()
        .messages({
          'string.base': 'A URL da imagem deve ser uma string',
          'string.uri': 'A URL da imagem deve ser válida',
          'any.required': 'A URL da imagem é obrigatória',
        }),
      hourlyRate: Joi.number()
        .positive()
        .required()
        .messages({
          'number.base': 'A taxa por hora deve ser um número',
          'number.positive': 'A taxa por hora deve ser positiva',
          'any.required': 'A taxa por hora é obrigatória',
        }),
      maxUsageTime: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
          'number.base': 'O tempo máximo de uso deve ser um número',
          'number.integer': 'O tempo máximo de uso deve ser um número inteiro',
          'number.positive': 'O tempo máximo de uso deve ser positivo',
          'any.required': 'O tempo máximo de uso é obrigatório',
        }),
      lateFee: Joi.number()
        .min(0)
        .required()
        .messages({
          'number.base': 'A multa por atraso deve ser um número',
          'number.min': 'A multa por atraso deve ser pelo menos 0',
          'any.required': 'A multa por atraso é obrigatória',
        }),
      locationLat: Joi.number()
        .min(-90)
        .max(90)
        .required()
        .messages({
          'number.base': 'A latitude deve ser um número',
          'number.min': 'A latitude deve ser no mínimo -90',
          'number.max': 'A latitude deve ser no máximo 90',
          'any.required': 'A latitude é obrigatória',
        }),
      locationLng: Joi.number()
        .min(-180)
        .max(180)
        .required()
        .messages({
          'number.base': 'A longitude deve ser um número',
          'number.min': 'A longitude deve ser no mínimo -180',
          'number.max': 'A longitude deve ser no máximo 180',
          'any.required': 'A longitude é obrigatória',
        }),
    });

    const { error } = schema.validate(data);

    if (error) {
      throw new Error(error.details[0].message);
    }

    return;
  }
}