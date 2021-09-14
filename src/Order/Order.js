import React from "react";
import styled from "styled-components"
import {
  DialogContent,
  DialogFooter,
  ConfirmButton
} from "../FoodDialog/FoodDialog.js";
import {formatPrice} from "../Data/FoodData.js"
import {getPrice} from "../FoodDialog/FoodDialog.js";

export const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderContainer = styled.div`
    padding:10px 0px;
    border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

const DetailItem = styled.div`
    color: grey;
    font-size: 10px;
`;

function getSubtotal(orders)
{
    return orders.reduce((total, order) => {
            return total += getPrice(order);
        },0);
}

function getTax(orders)
{
    const subtotal = getSubtotal(orders);

    return subtotal * 0.10;
}

function getTotal(orders)
{
     const subtotal = getSubtotal(orders);
     const tax = getTax(orders);

     return subtotal + tax;
}



export function Order({orders, setOrders, setOpenFood, username, setIsOpen, dataOrder, isHistory, setIsAddress}) {

    const subtotal = getSubtotal(orders);

    function isUserLogin(){
        if(!username)
        {
            setOpenFood();
            setIsOpen(true);
        }
        else
        {
            if(orders.length === 0 || orders.isEmpty)
            {
                alert("Please choose a food");
            }
            else
            {
                setIsAddress(true);
            }
        }
    }

    const tax = subtotal * 0.10;
    const total = tax + subtotal;

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index,1);
        setOrders(newOrders);
    }

    if(isHistory)
    {
        return historyOrder(dataOrder);
    }
    else{
    return (<OrderStyled>
            {orders.length === 0 ? (<OrderContent> Your order`s empty </OrderContent>)
            : (<OrderContent>
                    <OrderContainer>Your Order: </OrderContainer>
                    {orders.map((order,index) => (
                     <OrderContainer>
                        <OrderItem onClick={() => setOpenFood({...order,index})}>
                            <div>{order.quantity}</div>
                            <div>{order.name}</div>
                            <div style={{cursor: 'pointer'}} onClick={e => {
                                e.stopPropagation();
                                deleteItem(index);}}>
                            🗑️ </div>
                            <div>{formatPrice(getPrice(order))}</div>
                        </OrderItem>
                        <DetailItem>
                        {
                            order.toppings.filter(t => t.checked).map(topping => topping.name).join(", ")
                        }
                        {order.choice && <DetailItem>{order.choice}</DetailItem>}
                        </DetailItem>
                     </OrderContainer>
                    ))}
                    <OrderContainer>
                        <OrderItem>
                            <div/>
                            <div>Sub-Total</div>
                            <div>{formatPrice(subtotal)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div/>
                            <div>Tax</div>
                            <div>{formatPrice(tax)}</div>
                        </OrderItem>
                        <OrderItem>
                        <div/>
                            <div>Delivery</div>
                            <div>{formatPrice(2)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div/>
                            <div>Total</div>
                            <div>{formatPrice(total + 2)}</div>
                        </OrderItem>
                    </OrderContainer>
                </OrderContent>)}
            <DialogFooter>
                <ConfirmButton onClick={() => isUserLogin()}>Checkout</ConfirmButton>
            </DialogFooter>
    </OrderStyled>);
    }
}

function historyOrder(dataOrder)
{
    console.log(dataOrder);
    return (<OrderStyled>
                {dataOrder.length === 0 ? (<OrderContent> Select History Order </OrderContent>)
                : (<OrderContent>
                        <OrderContainer>Your Order Was: </OrderContainer>
                        {dataOrder.map((order,index) => (
                         <OrderContainer>
                            <OrderItem>
                                <div>1</div>
                                <div>{order.name}</div>
                                <div>{formatPrice(getPrice(order))}</div>
                            </OrderItem>
                            <DetailItem>
                            {
                                order.toppings.filter(t => t.checked).map(topping => topping.name).join(", ")
                            }
                            </DetailItem>
                         </OrderContainer>
                        ))}
                        <OrderContainer>
                            <OrderItem>
                                <div/>
                                <div>Sub-Total</div>
                                <div>{formatPrice(getSubtotal(dataOrder))}</div>
                            </OrderItem>
                            <OrderItem>
                                <div/>
                                <div>Tax</div>
                                <div>{formatPrice(getTax(dataOrder))}</div>
                            </OrderItem>
                            <OrderItem>
                            <div/>
                                <div>Delivery</div>
                                <div>{formatPrice(2)}</div>
                            </OrderItem>
                            <OrderItem>
                                <div/>
                                <div>Total</div>
                                <div>{formatPrice(getTotal(dataOrder) + 2)}</div>
                             </OrderItem>
                        </OrderContainer>
                    </OrderContent>)}
        </OrderStyled>);
}