const salesService = require('../services/salesService');

// Promise.all antes do map(), dica do Sérgio Rodrigues no slack
/** Ref: https://flaviocopes.com/javascript-async-await-array-map/ */

const createSaleProduct = async (req, res) => {
  const sales = req.body;
  const id = await salesService.createSaleId();

  Promise.all(sales.map(async (obj) => {
    const { product_id, quantity } = obj;
    const sale = await salesService.createSaleProducts(id.insertId, product_id, quantity);
    return sale;
  }));

  return res.status(201).json(
    {
      id: id.insertId,
      itemsSold: sales,
    },
  );
};

module.exports = {
  createSaleProduct,
};