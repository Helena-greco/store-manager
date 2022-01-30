const productService = require('../services/productService');

const requiredValues = (req, res, next) => {
  const { name, quantity } = req.body;

  if (name === undefined || name === null) {
    res.status(400).json({ message: '"name" is required' });
    return;
  }
  if (quantity === undefined || quantity === null) {
    res.status(400).json({ message: '"quantity" is required' });
    return;
  }
  next();
};

const inputValues = (req, res, next) => {
  const { name, quantity } = req.body;

  if (name.length < 5) {
    res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    return;
  }

  if (typeof quantity !== 'number' || quantity < 1) {
    res.status(422).json({ message: '"quantity" must be a number larger than or equal to 1' });
    return;
  }
  next();
};

const sameName = async (req, res, next) => {
  const { name } = req.body;
  const allNames = await productService.productsByName(name);
  const oneName = allNames.find((product) => product.name === name);

  if (oneName) {
    return res.status(409).json(
      { message: 'Product already exists' },
    ); 
  }
  next();
};

const existId = async (req, res, next) => {
  const { id } = req.params;
  if (id === undefined || id === null) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const [productsId] = await productService.productsById(id);
  if (productsId === undefined || productsId === null) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const updateId = async (req, res, next) => {
  const { id } = req.params;
  const product = await productService.updateById(id);
  if (product.length < 1) return res.status(404).json({ message: 'Product not found' });
  next();
};

module.exports = {
  requiredValues,
  inputValues,
  sameName,
  existId,
  updateId,
}; 