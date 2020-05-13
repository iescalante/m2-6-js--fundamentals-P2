// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

let people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).
let ivan = { name: { first: "Ivan", last: "Escalante" }, age: 30 };

people.push(ivan);
console.log(people);
//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

function getAges(array, value) {
  let output = [];
  for (let i = 0; i < array.length; ++i) {
    output.push(array[i][value]);
  }
  return output;
}

let peopleAges = getAges(people, "age");
let total = 0;

function avgAge(peopleAges) {
  const total = peopleAges.reduce((a, b) => a + b, 0);
  return total / peopleAges.length;
}

let average = avgAge(peopleAges);

console.log(`Average age is ${average}`);

//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

// Your code here
function fullName(peopleArr) {
  return peopleArr.map(function (person) {
    let allNames = Object.values(person.name);
    let fullNames = allNames.join(" ");

    return fullNames;
  });
}

console.log(fullName(people));
//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age..

function olderPeople(peopleArr, age) {
  return peopleArr.filter(function (person) {
    return person.age > age;
  });
}

console.log(olderPeople(people, 26));
