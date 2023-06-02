import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 24px 0;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

export const LinkBlock = styled.div`
  padding: 8px 0 32px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const LinkLabel = styled.span`
  font-style: italic;
  margin-right: 6px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  width: 60px;
  padding: 5px 10px;
  background-color: #fff;
  padding: 1px 6px;
  border: 1px solid silver;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:visited {
    color: black;
  }
  &:hover,
  &:focus {
    color: skyblue;
    border: 1px solid skyblue;
  }
  &.active {
    color: #fff;
    background-color: skyblue;
  }
`;

export const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  background-color: #87cfeb3b;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    background-color: skyblue;
    color: #fff;
  }
`;

export const Header = styled.h1`
  color: skyblue;
  font-size: 48px;
`;
