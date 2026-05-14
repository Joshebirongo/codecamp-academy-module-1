// Author: Muliri Shebirongo Jonathan <Joshebirongo>

class Meal {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  showInformation() {
    return {
      Name: this.name,
      Price: this.price,
      Category: this.category,
    };
  }

  prepareMeal() {
    return "Preparing meal...";
  }
}

class Burger extends Meal {
  constructor(name, price, category, hasCheese) {
    super(name, price, category);
    this.hasCheese = hasCheese;
  }
  prepareMeal() {
    return "Grilling the burger and preparing ingredients.";
  }
}

class Pizza extends Meal {
  constructor(name, price, category, size) {
    super(name, price, category);
    this.size = size;
  }
  prepareMeal() {
    return "Baking the pizza in the oven.";
  }
}

class Salad extends Meal {
  constructor(name, price, category, dressing) {
    super(name, price, category);
    this.dressing = dressing;
  }

  prepareMeal() {
    return "Preparing fresh vegetables and adding dressing.";
  }
}

const burger = new Burger("Bacon Burger", 14, "American Food", true);

const pizza = new Pizza("Seafood Pizza", 18, "Italian Food", "Large");

const salad = new Salad("Avocado Salad", 9, "Vegetarian", "Caesar");

const menu = [burger, pizza, salad];

// Polymorphism
for (const meal of menu) {
  console.log(meal.showInformation());
  console.log(meal.prepareMeal());
  console.log("=====================================");
}
