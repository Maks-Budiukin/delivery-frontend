import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { RemoveFromCartThunk, changeItemCountThunk } from "redux/products/products.thunk"
import styled from "styled-components"

const StyledCartItem = styled.div`
    width: 500px;

    margin-top: 16px;
    display: flex;


`

const ImageThumb = styled.div`
    display: flex;
    width: 150px;
    height: 72px;
    border-radius: 4px;
    overflow: hidden;
`

const CartItemInfo = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
    width: 100%;
        border: 1px solid skyblue;
    border-top: none;
    border-left: none;
    border-radius: 4px;
`

const ProductPicture = styled.img`
    width: 100%;
    align-self: center;
`
const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;
`

const ItemPrice = styled.div`
    font-weight: bold;
    margin-right: 8px;
    color: skyblue;

`

const ItemName = styled.div`
    margin-left: 8px;
    color: skyblue;
    font-weight: bold;
    
`

const CounterTotal = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 8px;
    margin-bottom: 4px;
    align-items: center;
    gap: 8px;
`

const CounterInput = styled.input`
    width: 14px;
    text-align: center;
    border: 1px solid silver;
    border-radius: 2px;
    border-left: none;
    border-right: none;
    margin: 2px;
    &:focus {
        outline: none;
    }

`

const CounterButton = styled.button`
    background-color: #fff;
    border: 1px solid silver;
    border-radius: 2px;
    cursor: pointer;
    &:disabled {
        cursor: default;
    }
`

const ItemTotal = styled.div`
align-self: flex-end;
display: flex;
`

const ItemTotalPrice = styled.span`
    display: block;
    min-width: 72px;
    text-align: right;
    font-weight: bold;
`

const DeleteButton = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);

    border: 1px solid skyblue;
    border-radius: 4px;
    background-color: #fff;
    color: skyblue;

    transition-property: color, background-color, border;
    transition-duration: 250ms;
    transition-timing-function: ease;

    &:hover,
    &:focus  {
      border: 1px solid tomato;
      /* background-color: tomato; */
      color: tomato;
    }
`

export const CartItem = ({item}) => {
    const [counterValue, setCounterValue] = useState(item.count);

    const counterInpudId = nanoid();

    const dispatch = useDispatch();

    const onInputChange = (event) => {
    switch (event.target.name) {
        case "counter": setCounterValue(parseInt(event.target.value));
            break;
      default: return;
    }
    }
    
    const counterIncr = () => {
        setCounterValue(prevState => prevState += 1)
        
    }
    
    const counterDecr = () => {
        setCounterValue(prevState => prevState -= 1)
        
    }

    useEffect(() => {
        dispatch(changeItemCountThunk({id: item.id, count: counterValue}))
    }, [dispatch, counterValue])

    const totalProdValue = (prodPrice) => {
        const sum = parseFloat((prodPrice * counterValue).toFixed(2));
        return sum;
    }

    const handleRemove = (id) => {
        dispatch(RemoveFromCartThunk(id))
    }



    return (<>
    <li>
                        <StyledCartItem>
                            <ImageThumb>
                            <ProductPicture src={item.img} alt="shop logo"></ProductPicture>
                            </ImageThumb>
                <CartItemInfo>
                            <NamePrice><ItemName>{item.name}</ItemName>
                            <ItemPrice>${item.price}</ItemPrice></NamePrice>
                            <CounterTotal><div>

    <CounterButton type="button" disabled={ counterValue > 1 ? false : true} onClick={counterDecr}>-</CounterButton>

    <label htmlFor={counterInpudId}></label>    
    <CounterInput
      type="text"
          name="counter"
          id={counterInpudId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={counterValue}
      onChange={onInputChange}
      required
        />

                                <CounterButton type="button" onClick={counterIncr}>+</CounterButton>

                </div>
                
                <ItemTotal>TOTAL: <ItemTotalPrice>${totalProdValue(item.price)}</ItemTotalPrice></ItemTotal></CounterTotal>
                <DeleteButton type="button" onClick={() => handleRemove(item.id)}>X</DeleteButton>
                            </CartItemInfo>
                        </StyledCartItem>
                    </li></>)
}