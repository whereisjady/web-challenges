console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Social Media Post";
const text = "Text";
let likes = 99;
const user = "@whereisjady";
const isReporter = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(title, text, likes, user, isReporter);

likes = likes + 1;

console.log("likes: ", likes);

// --^-- write your code here --^--
