const connection = require('./connection');

const createSaleProducts = async (saleId, productId, quantity) => {
  const [saleProduct] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);', 
    [saleId, productId, quantity],
  );
  return saleProduct;
};

module.exports = createSaleProducts;