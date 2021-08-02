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
import {History} from "./History/History.js"
import { useOpenLogin } from "./Hooks/useOpenLogin";
import { usePassword } from "./Hooks/usePassword";
import { useLoginUser } from "./Hooks/useLoginUser";
import { useHistory } from "./Hooks/useHistory";
import { useHistoryOrders } from "./Hooks/useHistoryOrders";


function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    useTitle({...openFood, ...orders});
    const user = useUser();
    const isLoginFormOpen = useOpenLogin();
    const userPassword = usePassword();
    const isLoginUser = useLoginUser();
    const isHistory = useHistory(false);
    const histories = useHistoryOrders();

  return (
    <>
        <GlobalStyle/>
        <FoodDialog {...openFood} {...orders}/>
        <Navbar {...isLoginUser} {...isLoginFormOpen} {...user} {...isHistory}/>
        <Login {...user} {...isLoginFormOpen} {...userPassword} {...isLoginUser}/>
        <Order {...orders} {...openFood} {...user} {...isLoginFormOpen} {...histories}/>
        <Banner/>
        <History {...isHistory} {...histories}/>
        <Menu {...openFood} {...isHistory}/>
    </>
  );
}
export default App;
