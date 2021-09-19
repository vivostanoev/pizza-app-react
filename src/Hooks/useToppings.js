import { useState } from "react";

export function useToppings(defaultTopping) {

  const [toppings, setToppings] = useState([]);

  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }

  return {
    checkTopping,
    toppings,
    setToppings
  };
}
