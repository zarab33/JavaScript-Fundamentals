const searchCandies = require('./searchCandies');

describe("searchCandies", () => {
 const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('search candies by first 2 character Ma and price below 10', () => {
        expect(searchCandies("Ma", 10)).toEqual([ 'Mars', 'Maltesers' ]);
    });

    it('search candies by first 2 character (Ma) and price above 2', () => {
        expect(searchCandies("Ma", 2)).toEqual([ 'Mars' ]);
    });

    it('search candies by first character (S) and price below 10', () => {
        expect(searchCandies("S", 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });

    it('search candies by first character (S) and price more than 4', () => {
        expect(searchCandies("S", 4)).toEqual([ 'Skitties', 'Skittles' ]);
    });

    it("also works with lower case search string", () => {
    expect(searchCandies("s", 4)).toEqual(["Skitties", "Skittles"]);
  });
});

});