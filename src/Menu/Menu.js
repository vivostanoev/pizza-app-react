import React from "react"
import styled from "styled-components"
import {foods} from "../Data/FoodData.js"
import {FoodGrid, Food, FoodLabel} from "./FoodGrid"

export const MenuStyled = styled.div`
    height:1000px;
    margin: 0px 400px 50px 20px;
`;

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
        {displayFoodSectionHeaders(sectionName)}
        {displayFoodSectionDetails(foods, setOpenFood)}
        </>
      ))}
    </MenuStyled>
  );
}


function displayFoodSectionHeaders(sectionName) {
    return <h1> {sectionName} </h1>
}

function displayFoodSectionDetails(foods, setOpenFood) {
    return <FoodGrid>
                {foods.map(food => displayFoodSection(food, setOpenFood))}
            </FoodGrid>
}

function displayFoodSection(food, setOpenFood){
    return <Food img={food.img} onClick={() => {setOpenFood(food);}}>
                <FoodLabel>{food.name}</FoodLabel>
            </Food>
}


