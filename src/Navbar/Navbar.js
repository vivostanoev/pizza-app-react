import React from "react";
import styled from "styled-components"
import {redPizza} from "../Styles/colors.js"
import {Title} from "../Styles/title.js"
import { LoginBar } from "../Login/Login.js";

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

export function Navbar({isLogin, setIsLogin, setIsOpen, username, setUsername,isHistory, setIsHistory,setHistory}){
    return <NavbarStyled>
        <Logo id="title">Pizza app
        <span role="img" aria-label="pizza slice">
         🍕
         </span>
         <LoginButton isLogin={isLogin} setIsLogin={setIsLogin} setIsOpen={setIsOpen} username={username} setUsername={setUsername} isHistory={isHistory} setIsHistory={setIsHistory}/>
        </Logo>
    </NavbarStyled>
}

function LoginButton({isLogin,setIsLogin,setIsOpen,username, setUsername,isHistory, setIsHistory,setHistory})
{
    function logout()
    {
        setIsOpen(true);
        setUsername();
    }

    if(!isLogin){
    return (<LoginBar id="loginButton" onClick={() =>
                        logout()}>Login</LoginBar>);
    }else {
        return [(<LoginBar id="loginButton" onClick={() => setIsLogin(false)}>{username}/Logout</LoginBar>),
        ,(<LoginBar name="menuOption" onClick={() => isHistory ? setIsHistory(false) : setIsHistory(true)}>
        {isHistory ? 'Menu' : 'History'}
       </LoginBar>)];
    }
}


