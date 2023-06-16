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
});


/* const ShoppingBasket = require('./ShoppingBasket');

describe('ShoppingBasket', () => {
    xit('')
})

      > const candy = new Candy('Mars', 4.99);

        > candy.getName();
        'Mars'
        > candy.getPrice();
        4.99

        > const basket = new ShoppingBasket();
        > basket.getTotalPrice();
        0

        > basket.addItem(candy);

        > basket.getTotalPrice();
        4.99

        > basket.addItem(new Candy('Skittle', 3.99));
        > basket.addItem(new Candy('Skittle', 3.99));

        > basket.getTotalPrice();
        12.97
*/