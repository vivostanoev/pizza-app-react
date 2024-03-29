import React from "react";
import styled from "styled-components";
import {Dialog, DialogShadow, DialogContent, ConfirmButton}  from "../FoodDialog/FoodDialog.js";
import {Title} from "../Styles/title.js"
import { useState } from "react";

export const LoginBar = styled(Title)`
    font-size: 20px;
    color: white;
    padding-right: 30px;
    text-shadow: 1px 1px 4px black;
    float: right;
     &:hover {
            cursor: pointer;
            filter: contrast(100%);
            margin-top:0px;
            margin-bottom:5px;
        }
`;

export const Wrapper = styled(Dialog)`
    width: 500px;
    max-height: 600px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LoginButton = styled(ConfirmButton)`
    margin: 15px;
    padding: 25px;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 13px 15px;
  background: #f9f9fa;
  color: black;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 20px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

 function LoginForm({username, setUsername, setIsOpen, password, setPassword, setIsLogin}) {

  const [error, setError] = useState();


 function close()
 {
    setIsOpen();
    setIsLogin();
 }

 function verifyUserCredentials()
 {
     verifyUserCredentialsViaRestCall(username, password, setIsOpen,setIsLogin,setError);
 }

 function createUser()
 {
    registerNewUser(username, password, setIsOpen,setIsLogin, setError);
 }

  return (
    <>
    <DialogShadow onClick={close}/>
      <Wrapper>
        <Form>
        <DialogContent>
            <h2> Email </h2>
          <Input
            type="username"
            name="username"
            onChange={e => setUsername(e.target.value)}
          />
           <h2> Password </h2>
          <Input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
           <div style={{ color: 'red' }}>{error}</div>
           <LoginButton name="login" onClick={()=> verifyUserCredentials()}>Login</LoginButton>
           <LoginButton name="register" onClick={()=> createUser()}>Register</LoginButton>
           <LoginButton name="register">Reset Password</LoginButton>
         </DialogContent>
        </Form>
      </Wrapper>
    </>
  );
}


export function Login(props) {
  if (!props.isOpen) return null;
  return <LoginForm {...props} />;
}


 function verifyUserCredentialsViaRestCall(user, pswd, setIsOpen, setIsLogin,setError) {
    fetch("http://localhost:5000/api/auth", {
         method: "POST",
         body: JSON.stringify({username: user, password: pswd}),
         headers: {"Content-Type": "application/json"}})
      .then(
        (result) => {
            if (result.status===200)
            {
                setIsOpen(false);
                setIsLogin(true);
            }
            else{
                result.json().then(data => {
                    setError(data.message);
                });
            }
        },
        (error) => {

        }
      )
  }


  function registerNewUser(user, pswd, setIsOpen, setIsLogin, setError) {
      fetch("http://localhost:5000/api/post/user", {
           method: "POST",
           body: JSON.stringify({username: user, password: pswd}),
           headers: {"Content-Type": "application/json"}})
        .then(
          (result) => {
              if (result.status===200)
              {
                  setIsOpen(false);
                  setIsLogin(true);
              }
              else{
                  result.json().then(data => {
                    console.log(data.message);
                    setError(data.message);
                  });
              }
          },
          (error) => {
          }
        )
    }