const connection = require('./connection');

const create = async (name, quantity) => {
  const [rows] = await connection.execute(
    'INSERT INTO products (name, quantity ) VALUES (?,?);', 
    [name, quantity],
  );

  return {
    id: rows.insertId,
    name,
    quantity,
  };
};

const getByName = async (name) => {
  const [rows] = await connection.execute(
    'SELECT * FROM products WHERE name = ?;',
    [name],
  );
  return rows;
};

const getById = async (id) => {
  const [rows] = await connection.execute('SELECT * FROM products WHERE id = ?;', [id]);
  return rows;
};

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM products;');
  return rows;
};

const updateProducts = async (id, name, quantity) => {
  const [rows] = await connection.execute(
    'UPDATE products SET name = ?, quantity = ? WHERE id = ?;', [name, quantity, id],
  );
  return rows;
};

const deleteProduct = async (id) => {
  await connection.execute('DELETE FROM products WHERE id = ?;', [id]);
};

module.exports = {
  create,
  getByName,
  getById,
  getAll,
  updateProducts,
  deleteProduct,
};