import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { CartItem } from "./CartItem"
import { ClearCartThunk } from "redux/products/products.thunk"

const StyledCartList = styled.ul`
    list-style: none;
    padding: 0;
`

const StyledButton = styled.button`

    width: 120px;
    background-color: #fff;
    padding: 5px 10px;

    margin-right: 24px; 
    /* border: 1px solid silver; */
    outline: none;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-weight: 700;

    transition-property: color, background-color, border;
    transition-duration: 250ms;
    transition-timing-function: ease;


    &:visited {
        color: black;
    }
    &:hover,
    &:focus  {
      outline: none;
      /* border: 1px solid skyblue; */
      background-color: tomato;
      color: #fff;
    }

`

export const CartList = () => {
    const cart = useSelector(state => state.products.cart)
    const dispatch = useDispatch();
    return (<>
    <StyledCartList>
        <StyledButton type="button" onClick={() => dispatch(ClearCartThunk())}>Clear Cart</StyledButton>
            {cart.map(item => {
                return (<CartItem key={item.id} item={item} />
                )
            })}
        </StyledCartList>
        </>)
}