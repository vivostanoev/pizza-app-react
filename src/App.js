import { createGlobalStyle } from 'styled-components'
import { Navbar } from "./Navbar/Navbar.js"

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
        <GlobalStyle/>
        <Navbar/>
        <div>Hello Pizza</div>
    </>
  );
}
export default App;
