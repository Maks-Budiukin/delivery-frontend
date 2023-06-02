import { OrdersItem } from "components/OrdersList/OrdersItem";
import { useSelector } from "react-redux";
import { StyledOrdersList, Header, Wrapper, Container } from "./OrdersList.styled";

export const OrdersList = () => {
    const orders = useSelector(state => state.auth.user.orders);

    return (
        <Wrapper>
            <Container>
                <Header>Your Orders</Header>
                <StyledOrdersList>
                    {orders.map(item => {
                        return (<OrdersItem key={item._id} date={item.createdAt} cart={item.cart} total={item.total} shop={item.cart[0].id.shop} completed={item.completed} />)
                    })}
                </StyledOrdersList>
            </Container>
        </Wrapper>)
}