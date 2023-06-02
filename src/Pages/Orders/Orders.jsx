import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOrdersThunk } from "redux/auth/auth.thunk";
import { OrdersList } from "components/OrdersList/OrdersList";


export const Orders = () => {
    const userID = useSelector(state => state.auth.user.id)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrdersThunk(userID))
    }, [dispatch])

 
    return (           
<OrdersList />
        
    
   )
}