import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { RemoveFromCartThunk, changeItemCountThunk } from "redux/products/products.thunk"

import {
    StyledCartItem,
    ImageThumb,
    CartItemInfo,
    ProductPicture,
    NamePrice,
    ItemPrice,
    ItemName,
    CounterTotal,
    CounterInput,
    CounterButton,
    ItemTotal,
    ItemTotalPrice,
    DeleteButton
} from "./CartItem.styled";

export const CartItem = ({item}) => {
    const [counterValue, setCounterValue] = useState(item.count);

    const counterInpudId = nanoid();
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        setCounterValue(parseInt(event.target.value));
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

    return (
        <StyledCartItem>
            <ImageThumb>
                <ProductPicture src={item.img} alt="shop logo"></ProductPicture>
            </ImageThumb>
            <CartItemInfo>
                <NamePrice>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>${item.price}</ItemPrice>
                </NamePrice>
                <CounterTotal>
                    <div>
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
                    )
}