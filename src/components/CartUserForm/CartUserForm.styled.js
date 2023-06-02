import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 170px;
  gap: 4px;
  width: 300px;

  input {
    display: flex;
    width: 210px;
    flex-direction: column;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  }
`;

export const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid skyblue;
  border-radius: 4px;
  color: skyblue;
  font-weight: bold;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    background-color: skyblue;
    color: #fff;
    border: 1px solid skyblue;
  }
`;

export const TotalPrice = styled.p`
  font-weight: bold;
  margin: 8px;
  font-size: 36px;
`;

export const ToastContainer = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ToastButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid skyblue;
  border-radius: 4px;
  color: skyblue;
  font-weight: bold;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    background-color: skyblue;
    color: #fff;
    border: 1px solid skyblue;
  }
`;
