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
import { useUser } from "./Hooks/useUser";
import {Login} from "./Login/Login.js";
import { useOpenLogin } from "./Hooks/useOpenLogin";
import { usePassword } from "./Hooks/usePassword";
import { useLoginUser } from "./Hooks/useLoginUser";


function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    useTitle({...openFood, ...orders});
    const user = useUser();
    const isLoginFormOpen = useOpenLogin();
    const userPassword = usePassword();
    const isLoginUser = useLoginUser();

  return (
    <>
        <GlobalStyle/>
        <FoodDialog {...openFood} {...orders}/>
        <Navbar {...isLoginUser} {...isLoginFormOpen}/>
        <Login {...user} {...isLoginFormOpen} {...userPassword} {...isLoginUser}/>
        <Order {...orders} {...openFood} {...user} {...isLoginFormOpen}/>
        <Banner/>
        <Menu {...openFood}/>
    </>
  );
}
export default App;
