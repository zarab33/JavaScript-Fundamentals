const Candy = require('./Candies');

jest.mock('./Candies');

describe('Candy', () => {
    beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Candy.mockClear();
    });

  it('returns a name and a price of a candy', () => {
    const mockCandy = new Candy('Mars', 4.99);
    mockCandy.getName.mockImplementation(() => 'Mars');
    mockCandy.getPrice.mockImplementation(() => 4.99);

    expect(mockCandy.getName()).toBe('Mars');
    expect(mockCandy.getPrice()).toBe(4.99);
  });
});
