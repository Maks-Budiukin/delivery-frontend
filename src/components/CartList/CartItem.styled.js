import styled from "styled-components";

export const StyledCartItem = styled.li`
  width: 500px;
  margin-top: 16px;
  display: flex;
`;
export const ImageThumb = styled.div`
  display: flex;
  width: 150px;
  height: 72px;
  border-radius: 4px;
  overflow: hidden;
`;

export const CartItemInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid skyblue;
  border-top: none;
  border-left: none;
  border-radius: 4px;
`;

export const ProductPicture = styled.img`
  width: 100%;
  align-self: center;
`;
export const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemPrice = styled.div`
  font-weight: bold;
  margin-right: 8px;
  color: skyblue;
`;

export const ItemName = styled.div`
  margin-left: 8px;
  color: skyblue;
  font-weight: bold;
`;

export const CounterTotal = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 8px;
  margin-bottom: 4px;
  align-items: center;
  gap: 8px;
`;

export const CounterInput = styled.input`
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
`;

export const CounterButton = styled.button`
  background-color: #fff;
  border: 1px solid silver;
  border-radius: 2px;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;

export const ItemTotal = styled.div`
  align-self: flex-end;
  display: flex;
`;

export const ItemTotalPrice = styled.span`
  display: block;
  min-width: 72px;
  text-align: right;
  font-weight: bold;
`;

export const DeleteButton = styled.button`
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
  &:focus {
    border: 1px solid tomato;
    color: tomato;
  }
`;
