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

const getAllSales = async () => {
  const getSales = await salesModels.getAllSales();
  return getSales;
};

const getSalesById = async (id) => {
  const getById = await salesModels.getSalesById(id);
  return getById;
};

module.exports = {
  createSaleId,
  createSaleProducts,
  getAllSales,
  getSalesById,
};