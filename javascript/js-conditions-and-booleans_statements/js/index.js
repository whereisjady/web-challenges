console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

// Answers:

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 101;
let hotdogPrice;

if (numberOfHotdogs < 5) {
  hotdogPrice = 2;
} else if (numberOfHotdogs > 5) {
  hotdogPrice = 1.5;
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 1000000) {
  hotdogPrice = 1;
} else if (numberOfHotdogs > 1000000) {
  hotdogPrice = 0.1;
}

const totalPrice = numberOfHotdogs * hotdogPrice;
console.log(
  "Total price for " + numberOfHotdogs + " hotdogs: " + totalPrice + " euro"
);

// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "Still need to learn" : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Klaus";
const coachName = "Klaus";

const greeting = "Hello " + (userName === coachName ? "Coach" : userName) + "!";

console.log(greeting);
