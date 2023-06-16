const Candy = require('./candy');

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
  //const candy = new Candy('Mars', 4.99);
//   console.log(candy.getName());
//   console.log(candy.getPrice());
//   const basket = new ShoppingBasket();
//   console.log(basket.getTotalPrice());
//   console.log(basket.addItem());
//   console.log(basket.addItem(new Candy('Skittle', 3.99)));
  module.exports = Candy;
  module.exports = ShoppingBasket;