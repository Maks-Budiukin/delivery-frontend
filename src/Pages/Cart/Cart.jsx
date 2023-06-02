import { CartUserForm } from "components/CartUserForm/CartUserForm";
import { CartList } from "components/CartList/CartList";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.section`
    display: flex;
    justify-content: center;

    padding-top: 36px;
    flex-wrap: wrap;
    gap: 40px;


`

export const Cart = () => {

    const cart = useSelector(state => state.products.cart)

    return (<Wrapper>
        {cart.length > 0
            ? <><CartUserForm /> <CartList /> </>
    : <p>Cart is empty :( </p>}
    </Wrapper>)
}