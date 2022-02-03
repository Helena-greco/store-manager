const sinon = require('sinon');
const { expect } = require('chai');

const productService = require('../../services/productService');
const productController = require('../../controllers/productController');
const saleService = require('../../services/salesService');
const saleController = require('../../controllers/salesController');

describe('1. Testa funções na camada Controller do Products', () => {
  describe('ao chamar o createProduct', () => {
    const response = {};
    const request = {};
  
    before(() => {
      request.body = {
        name: "banana",
        quantity: "6"
      };
  
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, 'createProduct').resolves(true);
    });
  
    after(() => {
      productService.createProduct.restore();
    });
  
    it('será validado se chamar o status com o código 201', async () => {
      await productController.createProduct(request, response);
  
      expect(response.status.calledWith(201)).to.be.equal(true);
    });
  
    it('será validado se chamar o json', async () => {
      await productController.createProduct(request, response);
  
      expect(response.json.called).to.be.equal(true);
    });
  });
  
  describe('ao chamar o getAllProducts', () => {
    const response = {};
    const request = {};
  
    before(() => {
      request.body = {};
  
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, 'getAll').resolves(true);
    });
  
    after(() => {
      productService.getAll.restore();
    });
  
    it('será validado se chamar o status com o código 200', async () => {
      await productController.getAllProducts(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('será validado se chamar o json', async () => {
      await productController.getAllProducts(request, response);
  
      expect(response.json.called).to.be.equal(true);
    });
  
  });
  
  describe('Ao chamar o deleteById', () => {
    const response = {};
    const request = {};
  
    before(() => {
      request.params = { id: 1 }
      request.body = {
        name: "banana",
        quantity: "6"
      };
  
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, 'deleteById').resolves(true);
    });
  
    after(() => {
      productService.deleteById.restore();
    });
  
    it('será validado se chamar o status com o código 200', async () => {
      await productController.deleteById(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('será validado se chamar o json', async () => {
      await productController.deleteById(request, response);
  
      expect(response.json.called).to.be.equal(true);
    });
  });
});
describe('2. Testa funções na camada Controller do Sales', () => {
  describe('Ao chamar o createSaleProducts', () => {
    const response = {};
    const request = {};
  
    before(() => {
      request.body = [{
        product_id: 1,
        quantity: 6
      }];
  
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, 'createSaleProducts').resolves(true);
    });
  
    after(() => {
      saleService.createSaleProducts.restore();
    });
  
    it('será validado se chamar o status com o código 201', async () => {
      await saleController.createSaleProduct(request, response);
  
      expect(response.status.calledWith(201)).to.be.equal(true);
    });
  
    it('será validado se chamar o json', async () => {
      await saleController.createSaleProduct(request, response);
  
      expect(response.json.called).to.be.equal(true);
    });
  
  });
  
  describe('Ao chamar o getAllSales', () => {
    const response = {};
    const request = {};
  
    before(() => {
      request.body = {};
  
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, 'getAllSales').resolves(true);
    });
  
    after(() => {
      saleService.getAllSales.restore();
    });
  
    it('será validado se chamar o status com o código 200', async () => {
      await saleController.getAllSales(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('será validado se chamar o json', async () => {
      await saleController.getAllSales(request, response);
  
      expect(response.json.called).to.be.equal(true);
    });
  });
});
