const Joi = require('joi');

const productValidationSchema = Joi.object({
  name: Joi.string()
    .required()
    .trim()
    .min(2)
    .max(100)
    .messages({
      'string.empty': 'Product name is required',
      'string.min': 'Product name must be at least 2 characters long',
      'string.max': 'Product name cannot exceed 100 characters'
    }),
  
  price: Joi.number()
    .required()
    .min(0)
    .messages({
      'number.base': 'Price must be a number',
      'number.min': 'Price cannot be negative'
    }),
  
  stockQuantity: Joi.number()
    .required()
    .integer()
    .min(0)
    .messages({
      'number.base': 'Stock quantity must be a number',
      'number.integer': 'Stock quantity must be an integer',
      'number.min': 'Stock quantity cannot be negative'
    })
});

module.exports = {
  validateProduct: (product) => productValidationSchema.validate(product)
};