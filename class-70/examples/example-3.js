/*
Problem 3: Modify an Element

Create an array with three city names. 
Change the second city to "Tokyo" and print 
the array.
*/
let cities = ["Paris", "London", "Berlin"];
console.log(`
The list of cities is: ${cities}
The toal of cities is: ${cities.length}
The first city is: ${cities[0]}
The last city is: ${cities[2]}
The last city is: ${cities[cities.length - 1]}
`);

let secondCity = cities[1]; // London
console.log(`The second city is: ${secondCity}`);
console.log(`The second city is: ${cities[1]}`);

cities[1] = "Tokyo";
secondCity = cities[1];

console.log(`List of cities: ${cities}`);
console.log(`The second city is: ${secondCity}`);
console.log(`The second city is: ${cities[1]}`);

cities[2] = "New York";
thirdCity = cities[2];
console.log(`List of cities: ${cities}`);
console.log(`The thirdCity city is: ${thirdCity}`);
console.log(`The thirdCity city is: ${cities[2]}`);
