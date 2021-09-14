import { GlobalStyle } from './Styles/GlobalStyle.js'
import { Navbar } from "./Navbar/Navbar.js"
import { Banner } from "./Banner/Banner.js"
import { Menu } from "./Menu/Menu.js"
import { FoodDialog } from "./FoodDialog/FoodDialog.js"
import { Order } from "./Order/Order.js"
import Address from "./Address/Address.js"
import React from "react"
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { useUser } from "./Hooks/useUser";
import {Login} from "./Login/Login.js";
import {History} from "./History/History.js"
import { useOpenLogin } from "./Hooks/useOpenLogin";
import { usePassword } from "./Hooks/usePassword";
import { useLoginUser } from "./Hooks/useLoginUser";
import { useAddress } from "./Hooks/useAddress";
import { useHistory } from "./Hooks/useHistory";
import { useHistoryOrders } from "./Hooks/useHistoryOrders";
import { useDataHistoryOrders } from "./Hooks/dataHistoryOrders";

function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    const historyOrder = useDataHistoryOrders();
    useTitle({...openFood, ...orders});
    const user = useUser();
    const isLoginFormOpen = useOpenLogin();
    const userPassword = usePassword();
    const isLoginUser = useLoginUser();
    const isHistory = useHistory(false);
    const histories = useHistoryOrders();
    const address = useAddress();

  return (
    <>
        <GlobalStyle/>
        <FoodDialog {...openFood} {...orders}/>
        <Navbar {...isLoginUser} {...isLoginFormOpen} {...user} {...isHistory} {...histories} {...orders} {...historyOrder}/>
        <Login {...user} {...isLoginFormOpen} {...userPassword} {...isLoginUser}/>
        <Order {...orders} {...openFood} {...user} {...isLoginFormOpen} {...historyOrder} {...isHistory} {...address}/>
        <Banner/>
        <Address {...address} {...orders} {...user}/>
        <History {...user} {...isHistory} {...histories} {...historyOrder}/>
        <Menu {...openFood} {...isHistory}/>
    </>
  );
}
export default App;

//        <Address/>