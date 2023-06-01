import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { RemoveFromCartThunk, changeItemCountThunk } from "redux/products/products.thunk"
import styled from "styled-components"

const StyledCartItem = styled.div`
    width: 500px;
    display: flex;
    border: 1px solid silver;
    border-radius: 4px;
`

const ImageThumb = styled.div`
    display: flex;
    width: 150px;
    height: 100px;
    overflow: hidden;
`

const ProductPicture = styled.img`
    width: 100%;
    align-self: center;
`

export const CartItem = ({item}) => {
    const [counterValue, setCounterValue] = useState(item.count);

    const counterInpudId = nanoid();

    const dispatch = useDispatch();

    const onInputChange = (event) => {
    switch (event.target.name) {
        case "counter": setCounterValue(event.target.value);
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
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                            <div>
                                <button type="button" onClick={counterIncr}>+</button>


    <label htmlFor={counterInpudId}></label>    
    <input
      type="text"
          name="counter"
          id={counterInpudId}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={counterValue}
      onChange={onInputChange}
      required
        />


                    <button type="button" disabled={ counterValue > 1 ? false : true} onClick={counterDecr}>-</button>
                </div>
                
                <div>TOTAL:{totalProdValue(item.price)}</div>
                <button type="button" onClick={() => handleRemove(item.id)}>X</button>
                        </StyledCartItem>
                    </li></>)
}