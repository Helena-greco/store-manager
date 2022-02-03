const connection = require('./connection');

const create = async (name, quantity) => {
  try {
    const [rows] = await connection.execute(
      'INSERT INTO products (name, quantity ) VALUES (?,?);', 
      [name, quantity],
    );
  
    return {
      id: rows.insertId,
      name,
      quantity,
    };
  } catch (err) {
    console.log(err);
  }
};

const getByName = async (name) => {
  try {
    const [rows] = await connection.execute(
      'SELECT * FROM products WHERE name = ?;',
      [name],
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const getById = async (id) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM products WHERE id = ?;', [id]);
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.execute('SELECT * FROM products;');
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const updateProducts = async (id, name, quantity) => {
  try {
    const [rows] = await connection.execute(
      'UPDATE products SET name = ?, quantity = ? WHERE id = ?;', [name, quantity, id],
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (id) => {
  try {
    await connection.execute('DELETE FROM products WHERE id = ?;', [id]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  create,
  getByName,
  getById,
  getAll,
  updateProducts,
  deleteProduct,
};