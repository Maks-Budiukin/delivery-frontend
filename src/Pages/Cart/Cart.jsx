import { CartUserForm } from "components/CartUserForm/CartUserForm";
import { CartList } from "components/CartList/CartList";
import { useSelector } from "react-redux";
import { Wrapper } from "./Cart.styled";

export const Cart = () => {
    
    const cart = useSelector(state => state.products.cart)

    return (
        <Wrapper>
            {cart.length > 0
            ? <><CartUserForm /> <CartList /> </>
            : <p>Cart is empty :( </p>}
        </Wrapper>)
}