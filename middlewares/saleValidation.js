const required = (req, res) => {
  const sales = req.body;
  const productId = sales.filter((item) => item.product_id === undefined);
  const quantity = sales.filter((item) => item.quantity === undefined);
  const quantityNumber = sales
    .filter((item) => typeof item.quantity !== 'number' || item.quantity < 1);

  if (productId.length > 0) {
    return res.status(400).json({ message: '"product_id" is required' });
  }
  if (quantity.length > 0) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (quantityNumber.length > 0) {
    return res.status(422).json(
      { message: '"quantity" must be a number larger than or equal to 1' },
    );
  }
  console.log(sales);
};

module.exports = {
  required,
};