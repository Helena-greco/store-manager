const salesModels = require('../models/salesModels');

const createSaleId = async () => {
  const id = await salesModels.salesId();
  return id;
};

const createSaleProducts = async (id, productId, quantity) => {
  const sale = await salesModels.createSaleProducts(id, productId, quantity);
  return sale;
};

module.exports = {
  createSaleId,
  createSaleProducts,
};