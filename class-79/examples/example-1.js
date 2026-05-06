const user = {
  name: "Michael",
  lastName: "Jordan",
  age: 55,
  rol: "Basket ball player",
  status: "Retired",
  isAlive: true,
  title: 10,
  match: 1072,
  point: 32292,
  AveragePoints: 30.12,
  MVP: [1991, 1992, 1996, 1998, 1998],
  seasons: 15,
  teams: ["Chicago Bulls", "Washington Wizards"],
};

console.log("************************************");
console.log("User:");
console.log(user);
console.log("************************************");
console.log("User status:", user.status);
console.log("************************************");
user.age = 65;
console.log("************************************");
console.log("Age updated:");
console.log("User age:", user.age, "years old.");
console.log("************************************");
user.favoriteFood = "Steak";
user.favoriteCigar = "Pall mall";
console.log("************************************");
console.log("User data updated:");
console.log(user);
console.log("************************************");
delete user.favoriteFood;
delete user.favoriteCigar;
console.log("************************************");
console.log("User data updated:");
console.log(user);
console.log("************************************");
