import React from "react"
import styled from "styled-components"
import {FoodGrid, Food, FoodLabel} from "./FoodGrid"
import {formatPrice} from "../Data/FoodData.js"
import { useState, useEffect } from "react";

export const MenuStyled = styled.div`
    height:1000px;
    margin: 0px 400px 50px 20px;
`;

export function MenuContainer({setOpenFood,isHistory}) {
  const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/get/foods");
                const json = await response.json();
                setFoods(json);
            } catch (error) {

            }
        };

        fetchData();
    }, []);


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

export function Menu(props) {
  if (props.isHistory) return null;
  return <MenuContainer {...props} />;
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
                <FoodLabel>
                <div>{food.name}</div>
                <div>{formatPrice(parseInt(food.price))}</div>
                </FoodLabel>
            </Food>
}



