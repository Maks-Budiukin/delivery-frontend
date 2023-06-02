import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"

import { StyledCartList, Wrapper } from "./CartList.styled"

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