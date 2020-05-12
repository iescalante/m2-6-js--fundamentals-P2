// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// let myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }
let myObject = {
  name: {
    first: "Ivan",
    last: "Escalante",
  },
  age: "30",
  hometown: "Montreal",
};
console.log(myObject);
console.log(myObject.name.first);
console.log(myObject.age);
// A) console.log() your object.
// B) console.log() a few of the values in the object.

//-------------------------------------------------

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)
myObject.occupation = "Junior web developer";
myObject.pets = "none";
myObject.food = "sushi";

console.log(myObject);
// HINT: You can just modify the object that you created before.

//-------------------------------------------------

// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  Title: "Forrest Gump",
  Director: "Robert Zemeckis",
  Year_released: "1994",
  Rating: "8.8",
  Actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
};
console.log(favoriteMovie);
//-------------------------------------------------

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = "name";
const person = {
  name: "Alyssa P. Hacker",
  age: 26,
  hometown: "somewhere",
};

console.log(person.age); // => 26
console.log(person.name); // => "Alyssa P. Hacker"

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
let alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker",
  },
  age: 26,
};
function fullName(person) {
  return `${person.name.first} ${person.name.middle} ${person.name.last}`;
}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

let rick = {
  name: {
    first: "Rick",
    last: "Sanchez",
  },
  age: 66,
};

function betterFullName(person) {
  return `${person.name.first} ${person.name.last}`;
}

console.log(betterFullName(rick)); // => "Rick Sanchez"
