import React from "react";
import styled from "styled-components"
import {redPizza} from "../Styles/colors.js"
import {Title} from "../Styles/title.js"

const NavbarStyled = styled.div`
    background-color:${redPizza};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
`

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px black;
`

export function Navbar(){
    return <NavbarStyled>
        <Logo id="title">Pizza app
        <span role="img" aria-label="pizza slice">
         🍕
         </span>
        </Logo>
    </NavbarStyled>
}
