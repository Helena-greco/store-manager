const salesModels = require('../models/salesModels');
const productModels = require('../models/productModels');

const createSaleId = async () => {
  const id = await salesModels.salesId();
  return id;
};

const createSaleProducts = async (id, productId, quantity) => {
  const getById = await productModels.getById(id);
  if (!getById) {
    return false;
  }
  const sale = await salesModels.createSaleProducts(id, productId, quantity);
  return sale;
};

module.exports = {
  createSaleId,
  createSaleProducts,
};