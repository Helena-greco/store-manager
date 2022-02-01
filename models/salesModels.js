const connection = require('./connection');

const salesId = async () => {
  const [productId] = await connection.execute('INSERT INTO sales () VALUE ();');
  return productId.insertId;
};

const createSaleProducts = async (saleId, productId, quantity) => {
  const [productSale] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);', 
    [saleId, productId, quantity],
  );
  
  return productSale;
};

module.exports = {
  salesId,
  createSaleProducts,
};