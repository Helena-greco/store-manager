const salesModels = require('../models/salesModels');

const createSaleId = async () => {
  const id = await salesModels.salesId();
  console.log(id);
  return id;
};

const createSaleProducts = async (saleId, productId, quantity) => {
  const sale = await salesModels.createSaleProducts(saleId, productId, quantity);
  console.log(sale);
  return sale;
};

module.exports = {
  createSaleId,
  createSaleProducts,
};