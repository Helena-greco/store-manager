const productService = require('../services/productService');

const createProduct = async (req, res, next) => {
  const { name, quantity } = req.body;
  const create = await productService.createProduct(name, quantity);
  res.status(201).json(create);
  next();
};

const byName = async (req, res) => {
  const { name } = req.body;
  const columnByName = await productService.productsByName(name);
  return res.status(201).json(columnByName);
};

module.exports = {
  createProduct,
  byName,
};