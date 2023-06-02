import { useDispatch, useSelector } from "react-redux"
import { ProdItem } from "./ProdItem"
import { useEffect } from "react"
import { ClearCartThunk, getProductsThunk } from "../../redux/products/products.thunk"
import styled from "styled-components"

const StyledGallery = styled.ul`

    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    padding-top: 12px;
    gap: 32px;
`


export const ProdGallery = () => {
    const activeShopID = useSelector(state => state.shops.activeShop)
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();

    useEffect(() => {
        if (activeShopID) {
            dispatch(getProductsThunk(activeShopID))
        }
    }, [dispatch, activeShopID])
    return (<><StyledGallery>
        {activeShopID && products.map(item => {
        return(<ProdItem id={item._id} name={item.name} img={item.img} price={item.price} description={item.description} shop={activeShopID}></ProdItem>)
    })}
    
    </StyledGallery>
    
    
    
    </>)
}