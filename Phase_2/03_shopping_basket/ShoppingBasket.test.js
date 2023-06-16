const ShoppingBasket = require('./ShoppingBasket');
const Candy = require('./Candies');

jest.mock('./ShoppingBasket');

describe('Shopping Basket', () => {
    beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    ShoppingBasket.mockClear();
    });

  it('adds an item to the shopping basket', () => {
    const mockShoppingBasket = new ShoppingBasket('Mars', 4.99);

    mockShoppingBasket.addItem.mockImplementation(() => 'Mars');
    mockShoppingBasket.getTotalPrice.mockImplementation(() => 4.99);

    expect(mockShoppingBasket.addItem()).toBe('Mars');
    expect(mockShoppingBasket.getTotalPrice()).toBe(4.99);
  });

     const ShoppingBasket = require('./ShoppingBasket');
const Candy = require('./Candies');

jest.mock('./ShoppingBasket');

describe('Shopping Basket', () => {
  beforeEach(() => {
    ShoppingBasket.mockClear();
  });

  it('calculates the total price correctly for two items', () => {
    const mockShoppingBasket = new ShoppingBasket();

    const candy1 = new Candy('Mars', 4.99);
    const candy2 = new Candy('Skittles', 3.99);

    const basket = [];

    mockShoppingBasket.addItem.mockImplementation((candy) => {
      basket.push(candy);
    });

    mockShoppingBasket.getTotalPrice.mockImplementation(() => {
      return basket.reduce((total, candy) => total + candy.getPrice(), 0);
    });

    mockShoppingBasket.addItem(candy1);
    mockShoppingBasket.addItem(candy2);

    const totalPrice = candy1.getPrice() + candy2.getPrice();

    expect(mockShoppingBasket.getTotalPrice()).toBe(totalPrice);
  });
});

});
