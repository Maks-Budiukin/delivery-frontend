import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledSection = styled.section`
  border-bottom: 1px solid #c0c0c03e;
  color: #c0c0c03e;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  width: 120px;
  background-color: #fff;
  padding: 5px 10px;
  margin-right: 24px;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:visited {
    color: black;
  }
  &:hover,
  &:focus {
    outline: none;
    background-color: #87cfeb3b;
  }
  &.active {
    color: #fff;
    background-color: skyblue;
  }
`;

export const StyledButton = styled.button`
  width: 120px;
  background-color: #fff;
  padding: 5px 10px;
  margin-right: 24px;
  outline: none;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid skyblue;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:visited {
    color: black;
  }
  &:hover,
  &:focus {
    outline: none;
    background-color: #87cfeb3b;
  }
  &.active {
    color: #fff;
    background-color: skyblue;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavBar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(NavLink)`
  width: 150px;
`;

export const Logo = styled.img`
  width: 100%;
  display: block;
`;

export const StyledClearButton = styled.button`
  right: 168px;
  width: 120px;
  background-color: #fff;
  padding: 5px 10px;
  margin-right: 24px;
  border-radius: 4px;
  color: tomato;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid tomato;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover {
    outline: none;
    background-color: tomato;
    color: #fff;
  }
`;

export const AuthBlock = styled.div`
  min-width: 300;
  display: flex;
`;
