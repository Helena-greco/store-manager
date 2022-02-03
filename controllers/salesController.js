const salesService = require('../services/salesService');

const createSaleProduct = async (req, res) => {
  const sales = req.body;
  const id = await salesService.createSaleId();

  // ajuda do Nataniel Santos no Slack sobre o Promise.all
  const productSale = sales.map(async (obj) => {
    const { product_id, quantity } = obj;
    const sale = await salesService.createSaleProducts(id.insertId, product_id, quantity);
    return sale;
  });

  await Promise.all(productSale);

  if (!productSale) {
    return res.status(404).send({ message: 'Product not found' });
  }

  return res.status(201).json(
    {
      id: id.insertId,
      itemsSold: sales,
    },
  );
};

const getAllSales = async (_req, res) => {
  const getSales = await salesService.getAllSales();
  return res.status(200).json(getSales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getSalesById(id);
  console.log(sale);
  if (!sale.length) {
    return res.status(404).send({ message: 'Sale not found' });
  }
  return res.status(200).json(sale);
};

module.exports = {
  createSaleProduct,
  getAllSales,
  getSalesById,
};