// Author: Muliri Shebirongo Jonathan <Joshebirongo>
// Movie Wachlist Manager

let watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator"];

// 1. Print the total number of movies in the watchlist
console.log("\n***********************************************");
console.log(`Total of movies in the watchlist: ${watchlist.length}`);
console.log("***********************************************");

// 2. Add movie to the watchlist
watchlist.push("The Dark Knight");
watchlist.push("Avatar");

console.log("\n***********************************************");
console.log(`Watchlist after adding two movies:is ${watchlist}`);
console.log("***********************************************");

// 3. Remove the last movie in the watchlist
let removedLastMovie = watchlist.pop();
console.log("\n***********************************************");
console.log(`Removed last movie is: ${removedLastMovie}`);
console.log("***********************************************");

// 4. Print the first movie in the watchinglist
console.log("\n***********************************************");
console.log(`The first movie in the wachinglist is: ${watchlist[0]}`);
console.log("***********************************************");

// 5. Print the last movie in the watchlist
console.log("\n***********************************************");
console.log(
  `The last movie in the wachlist is: ${watchlist[watchlist.length - 1]}`,
);
console.log("***********************************************");

// 6. Check if watchlist has 4 or more movies
console.log("\n***********************************************");
if (watchlist.length >= 4) {
  console.log("You have many movies to watch!");
} else {
  console.log("Your watchlist is small");
}
console.log("***********************************************");

// 7. Print all movies in the watchlist with their position number,
// starting from 1
console.log("Current watchlist:");

for (let i = 0; i < watchlist.length; i++) {
  console.log("------------------------------------------------");
  console.log(`${i + 1} - ${watchlist[i]}`);
  console.log("------------------------------------------------");
}
