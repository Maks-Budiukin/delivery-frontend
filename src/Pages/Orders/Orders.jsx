import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOrdersThunk } from "redux/auth/auth.thunk";
import { OrdersList } from "components/OrdersList/OrdersList";


export const Orders = () => {
    const userID = useSelector(state => state.auth.user.id)
    const isRefreshing = useSelector(state => state.auth.isRefreshing)
    
    const dispatch = useDispatch();

    useEffect(() => {
        !isRefreshing && dispatch(getOrdersThunk(userID))
    }, [dispatch, isRefreshing])
 
    return (<OrdersList />)
}