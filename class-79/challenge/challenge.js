// Muliri Shebirongo Jonathan <Joshebirongo>

const footballer = {
  personalInfo: {
    fullName: "Lionel Andrés Messi",
    dateOfBirth: "1987-06-24",
    nationality: "Argentine",
    height: "1.70m",
    isAlive: true,
  },

  career: {
    position: "Forward",
    currentClub: "Inter Miami (USA)",
    number: 10,
    preferredFoot: "Left",

    previousClubs: ["Fc Barcelona", "Paris Saint-Germain"],
  },

  stats: {
    goals: 900,
    assists: 400,
    appearances: 1130,
  },

  achievements: {
    ballonDor: {
      total: 8,
      years: [2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023],
    },
    trophies: ["World Cup 2022", "Champions League", "Copa America", "La Liga"],
  },

  // Bonus: Method using years
  getBallonDorYears: function () {
    return `Ballon d'Or won in: ${this.achievements.ballonDor.years.join(", ")}`;
  },
};

console.log(footballer);
console.log(footballer.getBallonDorYears());
