console.clear();

/*
EXERCISE 1
Extract only the course name from the company object.
Make sure to export your variable as shown in the example below for the tests to work.
*/

const company = {
  name: "TechAcademy",
  course: "Web Development",
  location: "Hamburg",
};

// Example: export const { value1 } = myObject;
export const { course } = company;

/*
EXERCISE 2
We have an object called `user`.
Use destructuring to extract the following:
 2.1: The `name` property into a variable `name`.
 2.2: The `years` property into a variable `age`.
 2.3: The `isAdmin` property into the variable `isAdmin`.
      Set a default value of `false` if `isAdmin` is not present.
*/

const user = { name: "John", years: 30 };
export const { name } = user;
console.log(name);

/*
EXERCISE 3
Extract properties from the dog object and
rename them as `dogName`, `dogBreed`, and `dogAge`, respectively.
*/

const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

export const { name: dogName, breed: dogBreed, age: dogAge } = dog;

// console.log(dogName);
// console.log(dogBreed);
// console.log(dogAge);

/*
EXERCISE 4
Extract the `lastName` property from the `person` object as `personLastName`.
Store all other properties in an object called `moreInformation`.
*/

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

export const { lastName: personLastName, ...moreInformation } = person;

// console.log(personLastName);
// console.log(moreInformation);

/*
EXERCISE 5
Refactor the following function to use destructuring assignment for the
three variables `name`, `country` and `numPeople`.
Hint: You may need to rename one property during destructuring.
*/

export function logInfo(city) {
  const { name, country, population: numPeople } = city;

  return `${name} is in ${country} and has ${numPeople} inhabitants in it.`;
}

// Usage example:
console.log(
  logInfo({ name: "Marseille", country: "France", population: 861635 })
);
