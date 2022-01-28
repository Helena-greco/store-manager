const productService = require('../services/productService');

const createProduct = async (req, res, next) => {
  const { name, quantity } = req.body;
  const create = await productService.createProduct(name, quantity);
  res.status(201).json(create);
  next();
};

const getAllProducts = async (_req, res) => {
  const getProducts = await productService.getAll();
  return res.status(200).json(getProducts);
};

const byName = async (req, res, next) => {
  const { name } = req.body;
  const columnByName = await productService.productsByName(name);
  res.status(201).json(columnByName);
  next();
};

const byId = async (req, res) => {
  const { id } = req.params;
  const [productsId] = await productService.productsById(id);
  if (!productsId) {
    res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productsId);
};

module.exports = {
  createProduct,
  getAllProducts,
  byName,
  byId,
};