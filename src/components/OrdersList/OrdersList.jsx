import styled from "styled-components"
import { OrdersItem } from "components/OrdersList/OrdersItem";
import { useSelector } from "react-redux";

const StyledOrdersList = styled.ul`
    list-style: none;
    padding: 0;
`

const Header = styled.h1`
  color: skyblue;
  font-size: 48px;
`

const Wrapper = styled.section`
display: flex;
justify-content: center;
  padding: 24px 0;
  text-align: center;
`

const Container = styled.div`
    /* min-width: 800px; */
    flex-basis: 800px;
`



export const OrdersList = () => {
    const orders = useSelector(state => state.auth.user.orders);

    return (<Wrapper>
        <Container>
            <Header>Your Orders</Header>
        <StyledOrdersList>
        {orders.map(item => {
            return (<OrdersItem key={item._id} date={item.createdAt} cart={item.cart} total={item.total} shop={item.cart[0].id.shop} completed={item.completed} />)
            })}
    </StyledOrdersList>
        </Container></Wrapper>)
}