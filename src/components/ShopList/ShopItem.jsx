import { useDispatch} from "react-redux"
import { setActiveShopThunk } from "../../redux/shops/shops.thunk"
import { ShopButton, ImageThumb, Logo, ShopName } from "./ShopItem.styled";

export const ShopItem = ({ id, name, logo, active }) => {
    const dispatch = useDispatch();

    return (<>{
       <ShopButton disabled={active ? false : true} onClick={() => dispatch(setActiveShopThunk(id))}>
        <ImageThumb>
            <Logo src={logo} alt="shop logo"></Logo>
        </ImageThumb>
        <ShopName>{name}</ShopName>
    </ShopButton >
}</>)
}