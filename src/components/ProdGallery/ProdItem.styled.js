import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export const ImageThumb = styled.div`
  width: 240px;
  height: 160px;
  overflow: hidden;
`;

export const ProdImage = styled.img`
  width: 100%;
`;

export const ProductName = styled.p`
  font-weight: bold;
  margin: 4px 0 0 8px;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin: 8px;
  font-size: 24px;
`;
export const AddToCartButton = styled.button`
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
  &:focus {
    outline: none;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: #fff;
  }
`;

export const RemoveCartButton = styled.button`
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
  &:focus {
    outline: none;
    border: 1px solid tomato;
    background-color: tomato;
  }
`;
