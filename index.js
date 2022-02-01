require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/productController');
const saleController = require('./controllers/salesController');
const validation = require('./middlewares/validation');
const saleValidation = require('./middlewares/saleValidation');

const app = express();

app.use(bodyParser.json());

app.route('/products')
  .post(
    validation.requiredValues,
    validation.inputValues,
    validation.sameName,
    controller.createProduct,
  )
  .get(controller.getAllProducts);

app.route('/products/:id')
  .get(controller.byId)
  .put(
    validation.requiredValues,
    validation.inputValues,
    validation.existId,
    controller.updateById,
  )
  .delete(
    validation.existId,
    controller.deleteById,
  );

app.route('/sales')
  .post(
    saleValidation.required,
    saleController.createSaleProduct,
  );

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
