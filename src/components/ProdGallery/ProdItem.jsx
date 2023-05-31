import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { AddToCartThunk, RemoveFromCartThunk } from "../../redux/products/products.thunk"

const Wrapper = styled.div`
 width: 240px;
 height: 240px;
 border-radius: 6px;
 /* border: 1px solid skyblue; */
 overflow: hidden;
 /* margin-bottom: 30px; */
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

`

const ImageThumb = styled.div`
    width: 240px;
    height: 160px;
    overflow: hidden;
`

const ProdImage = styled.img`
    width: 100%;
`

const ProductName = styled.p`
    /* text-align: center; */
    font-weight: bold;
    margin: 4px 0 0 8px;
`

const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const ProductPrice = styled.p`
    font-weight: bold;
    margin: 8px;
    font-size: 24px;
`
const AddToCartButton = styled.button`
    margin-left: auto;
    margin-right: 8px;
    background-color: #fff;
    padding: 7px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid silver;
    border-radius: 4px;

    cursor: pointer;

        transition-property: color, background-color, border;
    transition-duration: 250ms;
    transition-timing-function: ease;

    &:hover,
    &:focus  {
      outline: none;
      border: 1px solid skyblue;
      background-color: skyblue;
      color: #fff;
    }
`

const RemoveCartButton = styled.button`
    margin-left: auto;
    margin-right: 8px;
    width: 86px;
    background-color: skyblue;
    color: #fff;
    padding: 7px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid skyblue;
    border-radius: 4px;

    cursor: pointer;

        transition-property: color, background-color, border;
    transition-duration: 250ms;
    transition-timing-function: ease;

    &:hover,
    &:focus  {
      outline: none;
      border: 1px solid tomato;
      background-color: tomato;
    }
`

export const ProdItem = ({ img, name, id, description, price, shop }) => {
    const cart = useSelector(state => state.products.cart)
    const added = cart.find(item => item.id === id)
    // const [added, setAdded] = useState(false)

    const dispatch = useDispatch();

    const handleAddClick = () => {
        // setAdded(true)
        dispatch(AddToCartThunk({img, name, id, description, price, shopID: shop}))
    }

    const handleRemoveClick = () => {
        // setAdded(false)
        dispatch(RemoveFromCartThunk(id))
    }

    return((<Wrapper>
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
        
    </Wrapper>))
}