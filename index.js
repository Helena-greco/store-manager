require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/productController');
const validation = require('./middlewares/validation');

const app = express();

app.use(bodyParser.json());

app.post('/products', validation.byName,
  validation.byQuantity,
  validation.findName,
  validation.length,
  validation.quantityIsInteger,
  controller.createProduct)
.get(controller.byName);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
