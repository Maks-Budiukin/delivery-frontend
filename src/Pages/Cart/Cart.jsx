import { CartUserForm } from "components/CartUserForm/CartUserForm";
import { CartList } from "components/CartList/CartList";
import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    
    flex-wrap: wrap;
    gap: 40px;


`

export const Cart = () => {

    return (<Wrapper>
        <CartUserForm />
        <CartList />
    </Wrapper>)
}