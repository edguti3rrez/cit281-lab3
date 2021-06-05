/*
    CIT 281 Lab 3
    Name: Edwin Gutierrez
*/

// Import reverseString() and concatenateString()
// functions from lab-03-module.js module using require()
const { reverseString, concatenateString } = require('./lab-03-module.js');

// Declare a specific car object
let car = {
    make: "Ford",
    model: "Mustang",
    vin: "4S3BMHB68B3286050",
    color: "Red",
    year: 2019,
    mileage: 1234,
    used: true,
    owners: [
        { last: "Last1", first: "First1" },
        { last: "Last2", first: "First2" }
    ]
}

// Assign car VIN number and year to constant variables
const {vin, year} = car;

// Declare a normal function that returns formatted car info
function getCarMakeModel(car) {
    return car.make + " " + car.model;
}
console.log(0, getCarMakeModel(car));

// An implicit arrow function for the cark make and model
let getCarMakeModelImplicit = (car) => `${car.make} ${car.model}`;
console.log(1, getCarMakeModelImplicit(car));

// An explicit arrow function for the cark make and model
const getCarMakeModelExplicit = (car) => {
    return `${car.make} ${car.model}`;
} 
console.log(2, getCarMakeModelExplicit(car));

// An aorrow function expression with object destructuring
const getCarMakeModelDestructure = (car) => {
    let {make, model} = car;
    return `${make} ${model}`
}
console.log(3, getCarMakeModelDestructure(car));

// for...in loop
for (let prop in car) {
    if (car.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

// Display all values of an array
const primes = [2,3,5,7,11];

// Display all array values using for..of syntax
for (const primeNumber of primes) {
    console.log(primeNumber);
}

// Import and use reverseString() and concatenateString() to produce cbacba in the console
console.log(concatenateString(reverseString('abc')));