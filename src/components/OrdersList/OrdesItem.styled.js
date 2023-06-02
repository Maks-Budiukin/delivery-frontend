import styled from "styled-components";

export const StyledOrderItem = styled.li`
  position: relative;
  margin-top: 32px;
  /* padding: 16px 0; */
  width: 100%;
  border: 1px solid skyblue;
  border-top: none;
  border-left: none;
  border-radius: 4px;

  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover {
    background-color: #87cfeb3b;
  }
`;

export const DateStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProductItem = styled.li`
  display: flex;
  height: 24px;
  width: 400px;
  justify-content: space-between;
  font-size: 16px;
  margin-left: 16px;
  font-style: italic;
`;

export const ProductItemStats = styled.span`
  font-weight: bold;
  font-style: normal;
`;

export const MulterItemStats = styled.span`
  color: skyblue;
`;

export const OrderDone = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: skyblue;
  border-top: 1px solid skyblue;
  border-left: 1px solid skyblue;
  border-radius: 4px;
`;

export const OrderUndone = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: tomato;
  border-top: 1px solid tomato;
  border-left: 1px solid tomato;
  border-radius: 4px;
`;

export const OrderStatus = styled.span`
  margin-left: auto;
  margin-right: 8px;
`;
