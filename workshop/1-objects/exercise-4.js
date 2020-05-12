// Exercise 4
// -------------------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// We have an Object that contains food pairings so that our sommelier can make
// educated recommendations. What we need is an Array that only holds all the foods.

// 6.1. Write a script that will print out all foods in the object.
let foods = Object.keys(foodPairings);

console.log(foods);
// 6.2 Write a script that outputs each key/value pair to the console a sentence like this:
// "With <FOOD_ITEM>, it is best to have <BEVERAGE>."
let pairings = Object.entries(foodPairings);

for (let [key, value] of pairings {
  console.log(`With ${key}, it is best to have ${value}`);
}

/*Object.keys(foodPairings).forEach((item, id) => {
  console.log(`With ${item}, it is best to have ${foodPairings[item]}.`);
});*/