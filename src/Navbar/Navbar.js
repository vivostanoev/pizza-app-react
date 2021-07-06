import React from "react";
import styled from "styled-components"
import {redPizza} from "../Styles/colors.js"
import {Title} from "../Styles/title.js"

const NavbarStyled = styled.div`
    background-color:${redPizza};
    padding: 10px;
`

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px black;
`

export function Navbar(){
    return <NavbarStyled>
        <Logo>Pizza app 🍕</Logo>
    </NavbarStyled>
}
