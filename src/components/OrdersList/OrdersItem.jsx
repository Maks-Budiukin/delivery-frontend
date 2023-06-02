import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const OrderItemInfo = styled.li`
position: relative;
margin-top: 32px;
   
    width: 100%;
    border: 1px solid skyblue;
    border-top: none;
    border-left: none;
    border-radius: 4px;
`

const DateStatus = styled.div`
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
`

const ProductsList = styled.ul`
    list-style: none;
    padding: 0;
`

const ProductItem = styled.li`
    display: flex;
    height: 24px;
    width: 400px;
    justify-content: space-between;
    font-size: 16px;
    margin-left: 16px;
    font-style: italic;
`

const ProductItemStats = styled.span`
font-weight: bold;
font-style: normal;
`

const MulterItemStats = styled.span`
color: skyblue;
`

const OrderDone = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: skyblue;
    border-top: 1px solid skyblue;
    border-left: 1px solid skyblue;
    border-radius: 4px;
`

const OrderUndone = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: tomato;
    border-top: 1px solid tomato;
    border-left: 1px solid tomato;
    border-radius: 4px;
`

const OrderStatus = styled.span`
    margin-left: auto;
    margin-right: 8px;
`

export const OrdersItem = ({ date, cart, total, shop, completed }) => {
    
    completed = true;
    const orderDate = new Date(Date.parse(date));
    const showDate = orderDate.toLocaleDateString('en-GB')
    console.log(cart)

        
    
  return (<OrderItemInfo>
      <DateStatus>
          <div>{showDate}</div>
            <OrderStatus>status:</OrderStatus> {completed ? <OrderDone>✓</OrderDone> : <OrderUndone>X</OrderUndone>}
        </DateStatus>
      
        <ProductsList>
            {cart.map(item => {
                return (<ProductItem>
                  
                        <p>• {item.id.name}</p>
                        <p> <ProductItemStats>${item.id.price} <MulterItemStats>x</MulterItemStats> {item.count}</ProductItemStats></p>
                        
                   
                </ProductItem>)
            })}
        </ProductsList>
        <p>{total}</p>
        
        
    </OrderItemInfo>)
}