const productModels = require('../models/productModels');

const createProduct = async (name, quantity) => {
  const create = await productModels.create(name, quantity);
  return create;
};

const productsByName = async (name) => {
  const byName = await productModels.getByName(name);
  return byName;
};

module.exports = {
  createProduct,
  productsByName,
};