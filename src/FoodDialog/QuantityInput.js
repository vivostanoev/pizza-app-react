import React from 'react'
import styled from "styled-components"
import {Title} from "../Styles/title.js"
import {redPizza} from "../Styles/colors.js"

const Quantity = styled(Title)`
    display: flex;
    height: 24px;
`;

const InputQuantity = styled.input`
    font-size: 20px;
    width: 24px;
    text-align: center;
    border: none;
    outline: none;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${redPizza};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${redPizza};
   ${({ disabled }) =>
      disabled &&
      `opacity: 0.5;
       pointer-events: none;
       `}
  &:hover {
    background-color: #ffe3e3;
  }
`;

export function QuantityInput({quantity}){
    return <Quantity>
    <div>Quantity: </div>
    <IncrementButton onClick={() => {
        quantity.setValue(quantity.value-1);
    }} disabled={quantity.value==1}> - </IncrementButton>
    <InputQuantity {...quantity}></InputQuantity>
    <IncrementButton onClick={() => {
        quantity.setValue(quantity.value+1);
    }}> + </IncrementButton>
    </Quantity>
}