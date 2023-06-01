import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOrdersThunk } from "redux/auth/auth.thunk";

export const Orders = () => {
    const userID = useSelector(state => state.auth.user.id)
    const orders = useSelector(state => state.auth.user.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrdersThunk(userID))
    }, [dispatch])

    console.log(orders)
    return(<><p>OrdersPage</p></>)
}