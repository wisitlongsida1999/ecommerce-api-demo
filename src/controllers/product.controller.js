const Product = require('../models/product.model');
const { validateProduct } = require('../validation/product.validation');

exports.createProduct = async (req, res, next) => {
  try {
    // Validate request body
    const { error } = validateProduct(req.body);
    if (error) {
      return res.status(400).json({
        status: 'error',
        message: error.details[0].message
      });
    }

    // Create new product
    const product = new Product(req.body);
    await product.save();

    res.status(201).json({
      status: 'success',
      data: product
    });
  } catch (error) {
    next(error);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const sortDirection = req.query.sort === 'desc' ? -1 : 1;
    const products = await Product.find()
      .sort({ price: sortDirection });

    res.json({
      status: 'success',
      data: products
    });
  } catch (error) {
    next(error);
  }
};
