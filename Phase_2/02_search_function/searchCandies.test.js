const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('search candies by first 2 character Ma and price below 10', () => {
        expect(searchCandies).toEqual([ 'Mars', 'Maltesers' ]);
    });

    it('search candies by first 2 character (Ma) and price above 2', () => {
        expect(searchCandies).toEqual([ 'Mars' ]);
    });

    it('search candies by first character (S) and price below 10', () => {
        expect(searchCandies).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });

    it('search candies by first character (S) and price more than 4', () => {
        expect(searchCandies).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });
});