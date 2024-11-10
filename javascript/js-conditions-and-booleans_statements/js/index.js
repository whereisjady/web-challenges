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
const numberOfHotdogs = 42;
let hotdogPrice;

if (numberOfHotdogs < 5) {
  hotdogPrice = 2;
} else if (numberOfHotdogs > 5) {
  (hotdogPrice = 1), 5;
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 1000000) {
  hotdogPrice = 1;
} else if (numberOfHotdogs > 1000000) {
  (hotdogPrice = 0), 10;
}

const totalPrice = numberOfHotdogs * hotdogPrice;
console.log("Total price for " + numberOfHotdogs + "hotdogs: " * totalPrice);

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
