import { ShopList } from "../../components/ShopList/ShopList"
import { ProdGallery } from "../../components/ProdGallery/ProdGallery"
import styled from "styled-components"

const Wrapper = styled.section`
    display: flex;
    padding: 16px 0;
`

export const Shop = () => {
    return (<Wrapper>
    <ShopList />
    <ProdGallery />
    </Wrapper>)
}