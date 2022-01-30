require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/productController');
const validation = require('./middlewares/validation');

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
    validation.updateId,
    controller.updateById,
  );

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
