const productService = require('../services/productService');

const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const create = await productService.createProduct(name, quantity);
  return res.status(201).json(create);
};

const getAllProducts = async (_req, res) => {
  const getProducts = await productService.getAll();
  return res.status(200).json(getProducts);
};

const byName = async (req, res) => {
  const { name } = req.body;
  const columnByName = await productService.productsByName(name);
  return res.status(201).json(columnByName);
};

const byId = async (req, res) => {
  const { id } = req.params;
  if (id === undefined || id === null) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const [productsId] = await productService.productsById(id);
  if (productsId === undefined || productsId === null) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productsId);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  await productService.updateById(id, name, quantity);
  const [updatedProduct] = await productService.productsById(id);
  return res.status(200).json(updatedProduct);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const [updatedProduct] = await productService.productsById(id);
  await productService.deleteById(id);
  return res.status(200).json(updatedProduct);
};

module.exports = {
  createProduct,
  getAllProducts,
  byName,
  byId,
  updateById,
  deleteById,
};