import { GlobalStyle } from './Styles/GlobalStyle.js'
import { Navbar } from "./Navbar/Navbar.js"
import { Banner } from "./Banner/Banner.js"
import { Menu } from "./Menu/Menu.js"

function App() {
  return (
    <>
        <GlobalStyle/>
        <Navbar/>
        <Banner/>
        <Menu/>
    </>
  );
}
export default App;
