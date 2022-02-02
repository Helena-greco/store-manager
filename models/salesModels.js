const connection = require('./connection');

const salesId = async () => {
  const [productId] = await connection.execute('INSERT INTO sales () VALUE ();');
  return productId;
};

const createSaleProducts = async (id, productId, quantity) => {
  console.log(id, productId, quantity);
  const [productSale] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);', 
    [id, productId, quantity],
  );
  return productSale;
};

module.exports = {
  salesId,
  createSaleProducts,
};