import { useDispatch, useSelector } from "react-redux"
import { ShopItem } from "./ShopItem"
import { useEffect } from "react";
import { getShopsThunk } from "../../redux/shops/shops.thunk"

import { StyledList} from "./ShopList.styled"

export const ShopList = () => {
    const shops = useSelector(state => state.shops.shops)
    const enabledShop = useSelector(state => state.products.enabledShop)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShopsThunk())
    }, [dispatch])

    return (
        <StyledList>
            {shops.map(item => {
                return (<ShopItem key={item._id} id={item._id} name={item.name} logo={item.logo} active={enabledShop && enabledShop !== item._id ? false : true } />)
            })}
        </StyledList>
    )
}