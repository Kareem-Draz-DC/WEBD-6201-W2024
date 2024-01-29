// <--------------- FUNCTIONS ---------------->

// add(3, 5); // --> return 8
// Function Declaration
// function add(a, b) {
//   console.log(a + b);
//   return a + b;
// }
// Execute the function below

// console.log(num);
// const num = 10; --> WILL GIVE ERROR

// Function Expression
// const add = function (a, b) {
//   console.log(a + b);
//   return a + b;
// };

// add(4, 6); // ---> return 10

// Arrow Functions
// const add = (a, b) => {
//   return a + b;
// };
// add(10, 5); // ---> return 15

// <------- SPREAD OPERATOR -------->

// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [6, 7, 8, 9];
// const numbersCopy = [...numbers, ...numbers2];

// console.log(numbersCopy);

// <----------- For/Of Loop --------->

// const numArray = [1, 2, 3, 4, 5];

// for (num of numArray) {
//   num += 100;
//   console.log(num);
// }

// const course = "client-side-scripting";

// for (letter of course) {
//   console.log(letter);
// }

// <---- JS Object ------>

const car = {
  type: "SUV",
  make: "Honda",
  year: 2015,
};

// console.log(car);
// console.log(car.type);
// console.log(car.year);

// <------ Maps ----->

const fruits = new Map([
  ["apple", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// console.dir(fruits);
// console.log(fruits.get("bananas"));

// <------Sets -------->

// const letters = new Set();
// letters.add("a");
// letters.add("a");
// letters.add("a");
// letters.add("b");
// letters.add(3);
// letters.add([1, 2, 3]);
// letters.add({ key: "value" });
// console.log(letters);

// <------- Classes -------->

class Animal {
  constructor(species, numOfLegs, canSwim, canFly) {
    this.species = species;
    this.numOfLegs = numOfLegs;
    this.canSwim = canSwim;
    this.canFly = canFly;
  }
  meow() {
    console.log("meow");
  }
}

const cat = new Animal("Persian Cat", 4, true, false);

console.log(cat);
cat.meow();
