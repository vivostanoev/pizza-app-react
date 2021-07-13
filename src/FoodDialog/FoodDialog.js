import React from "react"
import styled from "styled-components"
import {FoodLabel} from "../Menu/FoodGrid"

const Dialog = styled.div`
  width: 500px;
  height:500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({img}) => `background-image: url(${img});`}
    background-position:center;
    background-size:cover;
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const FoodBannerName = styled(FoodLabel)`
    top: 100px;
    font-size: 30px;
    padding: 5px 40px;
    opacity: 0.8;
`;

export function FoodDialog({openFood,setOpenFood}) {
    function close() {
        setOpenFood();
    }
    if (!openFood) return null;
    return(
        <>
        <DialogShadow onClick={close}/>
        <Dialog>
            <DialogBanner img={openFood.img}>
            <FoodBannerName>{openFood.name}</FoodBannerName>
            </DialogBanner>
        </Dialog>
        </>);
}
