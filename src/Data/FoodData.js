export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza"
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza"
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza"
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza"
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich"
  },
  {
    img: "/img/gyro.jpeg",
    name: "Gyro",
    section: "Sandwich"
  },
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich"
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "sides"
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});