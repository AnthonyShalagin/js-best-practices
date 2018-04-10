
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');
const balanceManager = require('./balanceManager');

module.exports = {
  insertCoin: function(coinType){
    const value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  releaseChange: function(){
    const currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return changeHandler.convertToChange(currentBalance);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  vendProduct: function(productId){
    const product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }

};
