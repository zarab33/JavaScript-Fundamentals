const ShoppingBasket = require('./ShoppingBasket')

describe("mocking tests", () => {
  it("gets the price for one mocked candy", () => {
    const CandyDouble = { getName: () => "Mars", getPrice: () => 4.99 };
    const new_basket = new ShoppingBasket();
    new_basket.addItem(CandyDouble);
    expect(new_basket.getTotalPrice()).toBe(4.99);
  });

  it("gets the total price for two mocked candies", () => {
    const CandyDouble = { getName: () => "Skittle", getPrice: () => 3.99 };
    const CandyDouble2 = { getName: () => "Mars", getPrice: () => 4.99 };
    const new_basket = new ShoppingBasket();
    new_basket.addItem(CandyDouble);
    new_basket.addItem(CandyDouble2);
    expect(new_basket.getTotalPrice()).toBe(8.98);
  });

  it("gets the discounted price for two mocked candies", () => {
    const CandyDouble = { getName: () => "Mars", getPrice: () => 4.99 };
    const CandyDouble2 = { getName: () => "Skittle", getPrice: () => 3.99 };
    const new_basket = new ShoppingBasket();
    new_basket.addItem(CandyDouble);
    new_basket.addItem(CandyDouble2);
    new_basket.applyDiscount(2.0);
    expect(new_basket.getTotalPrice()).toBe(6.98);
  });
});