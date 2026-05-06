const superBike = {
  brand: "BMW",
  type: "Motorcycle",
  category: "Super bike",
  line: "5100",
  model: "RR",
  releaseYear: 2021,
  engine: {
    type: "4 cylinders inline",
    time: "4-stroke",
    capacity: 999,
    horsePawer: 210,
    torqueNM: 113,
  },
  color: "Multicolor",
  topSpeedKm: 300,
  warrantly: 5,
  fuelType: "Premium",
  fuelCapacity: 16.5,
  price: 30000,
  weigthKg: 198,
};

console.log("***************************************");
console.log("Vehicle:");
console.log(superBike);
console.log("***************************************");
console.log("Vehicle engine:");
console.log(superBike.engine);
console.log("***************************************");
superBike.price = 45000;
console.log("***************************************");
console.log("Vehicle price:");
console.log(superBike.price, "USD");
console.log("***************************************");
superBike.LicenceRegistration = "564567568938390";
superBike.Owner = "George Foreman";
console.log("***************************************");
console.log("Vehicle:");
console.log(superBike);
console.log("***************************************");
delete superBike.LicenceRegistration;
delete superBike.Owner;
console.log("***************************************");
console.log("Vehicle:");
console.log(superBike);
console.log("***************************************");
