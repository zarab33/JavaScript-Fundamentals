class Candy {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
    getName() {
     return this.name;
    }
    getPrice() {
     return this.price;
    };
}
 
    const candy = new Candy ('Bounty','£2.89');
    console.log(candy.getName());
    console.log(candy.getPrice());

    module.export = Candy;