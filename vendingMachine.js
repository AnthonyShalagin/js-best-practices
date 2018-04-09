
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');
const balanceManager = require('./balanceManager');

const balance = 0;


const products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {

  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    switch(coinType){
      case 'p': return 1;
      case 'n': return 5;
      case 'd': return 10;
      case 'q': return 25;
      default: throw new Error(`Unrecognized coin ${  coinType}`);
    }
  },

  getProducts: function() {
    return products;
  },

  getProduct: function(productId) {
    const product = products.find(function(p) { return p.id === productId; });
    return product;
  },


  insertCoin: function(coinType){
    const value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  releaseChange: function(){
    const currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  vendProduct: function(productId){
    const product = this.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  }

};
