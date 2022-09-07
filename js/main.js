// 1.

let dog = {
    name: 'Zlata',
    numLegs: 4
};
// ---------------------------------------

// 2.

let dog = {
    name: "Zlata",
    numLegs: 4
};

console.log(dog.numLegs, dog.name);
// ---------------------------------------

// 3.

let dog = {
    name: "Zlata",
    numLegs: 4,
    sayLegs: function () { return 'This dog has ' + dog.numLegs + ' legs.' }

};

dog.sayLegs();
// --------------------------------------

// 4.

let dog = {
    name: "Zlata",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();
// --------------------------------------

// 5.

function Dog() {
    this.name = 'Zlata';
    this.color = 'brown';
    this.numLegs = 4;
}
// --------------------------------------

// 6.

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

let hound = new Dog();
// --------------------------------------

// 7.

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog('Jessica', "brown");
// --------------------------------------

// 8.

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);
myHouse instanceof House;
// ---------------------------------------

// 9.

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);
// ---------------------------------------

// 10.

function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 2;

let beagle = new Dog("Snoopy");
// ---------------------------------------