const connection = require('./connection');

const salesId = async () => {
  const [productId] = await connection.execute('INSERT INTO sales () VALUE ();');
  return productId;
};

const createSaleProducts = async (id, productId, quantity) => {
  try {
    const [productSale] = await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);', 
      [id, productId, quantity],
    );
    return productSale;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  salesId,
  createSaleProducts,
};