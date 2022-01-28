const connection = require('./connection');

const create = async (name, quantity) => {
  try {
    const [rows] = await connection.execute(
      'INSERT INTO products (name, quantity ) VALUES (?,?)', 
      [name, quantity],
    );

  return {
    id: rows.insertId,
    name,
    quantity,
  };
} catch (err) {
    console.error(err);
  }
};

const getByName = async (name) => {
  const [rows] = await connection.execute('SELECT * FROM products WHERE name = ?', [name]);
  return rows;
};

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM products');
  return rows;
};

module.exports = {
  create,
  getByName,
  getAll,
};