import { useDispatch, useSelector } from "react-redux"
import { AddToCartThunk, RemoveFromCartThunk } from "../../redux/products/products.thunk"
import {Wrapper, ImageThumb, ProdImage, ProductName, ProductInfo, ProductPrice, AddToCartButton, RemoveCartButton} from "./ProdItem.styled"

export const ProdItem = ({ img, name, id, description, price, shop }) => {

    const cart = useSelector(state => state.products.cart)
    const added = cart.find(item => item.id === id)

    const dispatch = useDispatch();

    const handleAddClick = () => {
        dispatch(AddToCartThunk({img, name, id, description, price, shopID: shop, count: 1}))
    }

    const handleRemoveClick = () => {
        dispatch(RemoveFromCartThunk(id))
    }

    return (
        <Wrapper>
            <ImageThumb>
                <ProdImage src={img} alt="shop logo"></ProdImage>
            </ImageThumb>
            <ProductName>{name}</ProductName>
            <ProductInfo>
                <ProductPrice>${price}</ProductPrice>

                {added
                ? <RemoveCartButton onClick={handleRemoveClick}>Remove</RemoveCartButton>
                : <AddToCartButton onClick={handleAddClick}>Add to cart</AddToCartButton>}
            
            </ProductInfo>
        </Wrapper>)
}