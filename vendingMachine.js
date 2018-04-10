
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');
const balanceManager = require('./balanceManager');

const balance = 0;

module.exports = {
  insertCoin: function(coinType){
    const value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  releaseChange: function(){
    const currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  vendProduct: function(productId){
    const product = this.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  }

};
