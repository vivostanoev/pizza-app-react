import React from "react"
import styled from "styled-components"
import {FoodLabel} from "../Menu/FoodGrid"
import {redPizza} from "../Styles/colors.js"
import {Title} from "../Styles/title.js"
import {formatPrice} from "../Data/FoodData.js"
import {QuantityInput} from "../FoodDialog/QuantityInput"
import {useQuantity} from "../Hooks/useQuantity.js"

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
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

export const DialogFooter = styled.div`
    box-shadow: 0px -2px 10px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
`;

export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    padding: 0px 40px;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${redPizza};
`;

const FoodBannerName = styled(FoodLabel)`
    top: 100px;
    font-size: 30px;
    padding: 5px 40px;
    opacity: 0.8;
`;

export function getPrice(order){
    return order.price * order.quantity;
}

export function FoodDialog({openFood,setOpenFood, setOrders, orders}) {
      const quantity = useQuantity(openFood && openFood.quantity);

    function close() {
        setOpenFood();
    }

    if (!openFood) return null;

       const order =
       {
            ...openFood,
            quantity: quantity.value
       };

        function addToOrder(){
            setOrders([...orders, order]);
            close();
        }

    return(
        <>
        <DialogShadow onClick={close}/>
        <Dialog>
            <DialogBanner img={openFood.img}>
            <FoodBannerName>{openFood.name}</FoodBannerName>
            </DialogBanner>
            <DialogContent>
                <QuantityInput quantity={quantity}/>
            </DialogContent>
            <DialogFooter>
                <ConfirmButton onClick={addToOrder}>
                    Add to order: {formatPrice(getPrice(order))}
                </ConfirmButton>
            </DialogFooter>
        </Dialog>
        </>);
}
