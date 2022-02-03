const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const productModels = require('../../models/productModels');
const salesModels = require('../../models/salesModels');

describe('Na rota "/products"', () => {
  describe('Testa se um produto é inserido com sucesso', () => {
    const product = {
      name: 'banana',
      quantity: 6,
    };
  
    before(async () => {
      const execute = [{ insertId: 1 }]; // retorno esperado nesse teste
  
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    });
  
    it('Será validado se retorna um objeto com as chaves "id", "name" e "quantity"', async () => {
      const object = await productModels.create(product);

      expect(object).to.be.an('object');
    });

    it('Será validado se o objeto possui o "id" do novo produto inserido', async () => {
      const objectId = await productModels.create(product);

      expect(objectId).to.have.a.property('id');
    });
  });
  
  describe('Busca todos os produtos no Banco de dados', () => {
    const products = [
      {
        id: 1,
        name: "chinelo",
        quantity: 4,
      },
      {
        id: 2,
        name: "caneta",
        quantity: 20,
      },
      {
        id: 3,
        name: "garrafa",
        quantity: 15,
      },
      {
        id: 4,
        name: "lápis",
        quantity: 25,
      }
    ];
    
    before(async () => {
      const execute = [products, []];

      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(async () => {
      connection.execute.restore();
    });

    it('Será validado se retorna a lista de produtos', async () => {
      const productList = await productModels.getAll();

      productList.forEach((product) => {
        expect(product).to.be.a('object');
        expect(product).to.have.a.property('id');
        expect(product).to.have.a.property('name');
        expect(product).to.have.a.property('quantity');
      });
    });
  });

  describe('Busca os produtos no DB na rota "/products/:id"', () => {
    const productById = [{
      id: 1,
      name: 'banana',
      quantity: 6,
    }];

    const id = productById[0].id

    before(async () => {
      const execute = [productById, []];

      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(async () => {
      connection.execute.restore();
    });
    
    it('Será validado quando listar os produtos por um "id"', async () => {
      const prodById = await productModels.getById(id);

      expect(prodById[0]).to.be.an('object');
      expect(prodById[0]).to.have.a.property('id');
      expect(prodById[0]).to.have.a.property('name');
      expect(prodById[0]).to.have.a.property('quantity');
      expect(prodById).to.be.length(1);
    });
  });
});

describe('Na rota "/sales"', () => {
  const id = { insertId: 1 };
  before(async () => {
    const execute = [id, []]; 

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Testa se uma venda é inserida com sucesso', () => {
    it('Será validado se retornar um objeto', async () => {
      const object = await salesModels.createSaleProducts();
  
      expect(object).to.be.an('object');
    });
  
    it('Será validado se o objeto possui o "id" da nova venda inserida', async () => {
      const objectId = await salesModels.createSaleProducts();
  
      expect(objectId).to.have.a.property('insertId');
    });
  });

});