import { useDispatch } from "react-redux"
import { setActiveShopThunk } from "../../redux/shops/shops.thunk"
import styled from "styled-components"

const Wrapper = styled.button`
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: space-between;
    font-weight: bold;
    background-color: #fff;
        padding: 5px 10px;
        border: none;

            border-radius: 4px;
    cursor: pointer;

        transition-property: color, background-color, border;
    transition-duration: 250ms;
    transition-timing-function: ease;

    &:hover,
    &:focus  {
      outline: none;
      /* border: 1px solid skyblue; */
      background-color: #87cfeb3b;
    }

      &.active {
    color: #fff;
    background-color: skyblue;
    /* border: 1px solid skyblue; */
  }

`

const ImageThumb = styled.div`
    width: 100px;
    border-radius: 50px;
    overflow: hidden;
`

const Logo = styled.img`
    width: 100%;
`

const ShopName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 90px;
    font-size: 16px;
    border-radius: 4px;
    border-right: 1px solid skyblue;
    border-bottom: 1px solid skyblue;
    
`

export const ShopItem = ({ id, name, logo }) => {

    const dispatch = useDispatch();

    return (<Wrapper onClick={() => dispatch(setActiveShopThunk(id))}>
        <ImageThumb>
            <Logo src={logo} alt="shop logo"></Logo>
        </ImageThumb>
        <ShopName>{name}</ShopName>
    </Wrapper>)
}