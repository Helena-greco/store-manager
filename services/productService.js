const productModels = require('../models/productModels');

const createProduct = async (name, quantity) => {
  const create = await productModels.create(name, quantity);
  return create;
};

const getAll = async () => {
  const getProducts = await productModels.getAll();
  return getProducts;
};

const productsByName = async (name) => {
  const byName = await productModels.getByName(name);
  return byName;
};

const productsById = async (id) => {
  const byId = await productModels.getById(id);
  console.log(byId);
  return byId;
};

module.exports = {
  createProduct,
  getAll,
  productsByName,
  productsById,
};