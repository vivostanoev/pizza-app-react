import { GlobalStyle } from './Styles/GlobalStyle.js'
import { Navbar } from "./Navbar/Navbar.js"
import { Banner } from "./Banner/Banner.js"
import { Menu } from "./Menu/Menu.js"
import { FoodDialog } from "./FoodDialog/FoodDialog.js"
import React, {useState} from "react"

function App() {
const [openFood, setOpenFood] = useState();

  return (
    <>
        <GlobalStyle/>
        <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
        <Navbar/>
        <Banner/>
        <Menu setOpenFood={setOpenFood}/>
    </>
  );
}
export default App;
