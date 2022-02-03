const connection = require('./connection');

const salesId = async () => {
  try {
    const [productId] = await connection.execute('INSERT INTO sales () VALUE ();');
    return productId;
  } catch (err) {
    console.log(err);
  }
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

const getAllSales = async () => {
  try {
    const [rows] = await connection.execute(
      `SELECT p.sale_id AS saleId, s.date, p.product_id, p.quantity FROM sales s
      INNER JOIN sales_products p ON s.id = p.sale_id;`,
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const getSalesById = async (id) => {
  try {
    const [rows] = await connection.execute(
      `SELECT s.date, p.product_id, p.quantity FROM sales s
      INNER JOIN sales_products p ON s.id = p.sale_id WHERE p.sale_id = ?;`, [id],
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  salesId,
  createSaleProducts,
  getAllSales,
  getSalesById,
};