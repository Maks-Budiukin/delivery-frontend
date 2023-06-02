import {StyledOrderItem, DateStatus, ProductsList, ProductItem, ProductItemStats, MulterItemStats, OrderDone, OrderUndone, OrderStatus} from "./OrdesItem.styled"

export const OrdersItem = ({ date, cart, total, shop, completed }) => {
    
    completed = true; //FOR UI TESTS
    
    const orderDate = new Date(Date.parse(date));
    const showDate = orderDate.toLocaleDateString('en-GB')

    return (
        <StyledOrderItem>
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
    </StyledOrderItem>)
}