import { useDispatch, useSelector } from "react-redux"
import { ShopItem } from "./ShopItem"
import { useEffect } from "react";
import { getShopsThunk } from "../../redux/shops/shops.thunk"
import styled from "styled-components";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
`

export const ShopList = () => {
    const shops = useSelector(state => state.shops.shops)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShopsThunk())
    }, [dispatch])

    return (
        <StyledList>
            {shops.map(item => {
                return (<ShopItem key={item._id} id={item._id} name={item.name} logo={item.logo} />)
        })}
    </StyledList>
    
    )
}