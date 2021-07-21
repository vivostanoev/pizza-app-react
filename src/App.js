import { GlobalStyle } from './Styles/GlobalStyle.js'
import { Navbar } from "./Navbar/Navbar.js"
import { Banner } from "./Banner/Banner.js"
import { Menu } from "./Menu/Menu.js"
import { FoodDialog } from "./FoodDialog/FoodDialog.js"
import { Order } from "./Order/Order.js"
import React, {useState} from "react"
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";


function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    useTitle({...openFood, ...orders});

  return (
    <>
        <GlobalStyle/>
        <FoodDialog {...openFood} {...orders}/>
        <Navbar/>
        <Order {...orders} {...openFood}/>
        <Banner/>
        <Menu {...openFood}/>
    </>
  );
}
export default App;
