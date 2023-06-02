import { useDispatch, useSelector } from "react-redux"
import { ProdItem } from "./ProdItem"
import { useEffect } from "react"
import { getProductsThunk } from "../../redux/products/products.thunk"
import { StyledGallery } from "./ProdGallery.styled"

export const ProdGallery = () => {
    const activeShopID = useSelector(state => state.shops.activeShop)
    const products = useSelector(state => state.products.products)

    const dispatch = useDispatch();

    useEffect(() => {
        if (activeShopID) {
            dispatch(getProductsThunk(activeShopID))
        }
    }, [dispatch, activeShopID])

    return (
        <StyledGallery>
            {activeShopID && products.map(item => {
                return(<ProdItem id={item._id} name={item.name} img={item.img} price={item.price} description={item.description} shop={activeShopID}></ProdItem>)
            })}
    
        </StyledGallery>
        )
}