import React from "react";
import styled from "styled-components"
import {redPizza} from "../Styles/colors.js"
import {Title} from "../Styles/title.js"
import { LoginBar } from "../Login/Login.js";
import { useState } from "react";
import PropTypes from 'prop-types';


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
`;

export function Navbar({isLogin, setIsLogin, setIsOpen}){
    return <NavbarStyled>
        <Logo id="title">Pizza app
        <span role="img" aria-label="pizza slice">
         🍕
         </span>
         <LoginButton isLogin={isLogin} setIsLogin={setIsLogin} setIsOpen={setIsOpen}/>
        </Logo>
    </NavbarStyled>
}

function LoginButton({isLogin,setIsLogin,setIsOpen})
{
    if(!isLogin){
    return (<LoginBar id="loginButton" onClick={() =>
                        setIsOpen(true)}>Login</LoginBar>);
    }else {
        return (<LoginBar id="loginButton" onClick={() =>
                                setIsLogin(false)}>Logout</LoginBar>);
    }
}
