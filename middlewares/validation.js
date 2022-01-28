const productService = require('../services/productService');

const byName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json(
      { message: '"name" is required' },
    ); 
  }
  next();
};

const length = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 5) {
    return res.status(422).json(
      { message: '"name" length must be at least 5 characters long' },
    ); 
  }
  next();
};

const findName = async (req, res, next) => {
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

const byQuantity = (req, res, next) => {
  const { quantity } = req.body;
  if (!quantity && quantity !== 0) {
    return res.status(400).json(
      { message: '"quantity" is required' },
    ); 
  }
  next();
};

const quantityIsInteger = (req, res, next) => {
  const { quantity } = req.body;
  if (typeof quantity !== 'number' || quantity < 1) {
    return res.status(422).json(
      { message: '"quantity" must be a number larger than or equal to 1' },
    ); 
  }
  next();
};

module.exports = {
  byName,
  length,
  findName,
  byQuantity,
  quantityIsInteger,
}; 