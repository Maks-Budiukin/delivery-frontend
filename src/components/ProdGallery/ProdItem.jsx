import styled from "styled-components"

const Wrapper = styled.div`


`

const ImageThumb = styled.div`
    width: 200px;
    overflow: hidden;
`

const ProdImage = styled.img`
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

export const ProdItem = ({img, name, id, description, price}) => {
    return((<Wrapper>
        <ImageThumb>
            <ProdImage src={img} alt="shop logo"></ProdImage>
        </ImageThumb>
        <ShopName>{name}</ShopName>
    </Wrapper>))
}