import { ShopList } from "../../components/ShopList/ShopList";
import { ProdGallery } from "../../components/ProdGallery/ProdGallery";
import { Wrapper } from "./Shop.styled";

export const Shop = () => {
    return (
        <Wrapper>
            <ShopList />
            <ProdGallery />
        </Wrapper>)
}