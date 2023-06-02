import { useSelector } from "react-redux"
import styled from "styled-components"
import { CartItem } from "./CartItem"


const StyledCartList = styled.ul`
    list-style: none;
    padding: 0;


`



const Wrapper = styled.div`
position: relative;

`

export const CartList = () => {
    const cart = useSelector(state => state.products.cart)

    return (<Wrapper>
        <StyledCartList>
            {cart.map(item => {
                return (<CartItem key={item.id} item={item} />
                )
            })}
        </StyledCartList>
        </Wrapper>)
}