const Candy = require('./Candies');

class ShoppingBasket {
    constructor() {
      this.basket = [];
    }

    getTotalPrice() {
        return this.basket.map(basket => basket.getPrice()).reduce((total, price) => total + price, 0);
      }

    addItem(candy) {
      this.basket.push(candy);
    }
  }

  module.exports = Candy;
  module.exports = ShoppingBasket;