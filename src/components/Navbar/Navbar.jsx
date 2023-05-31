import { NavLink } from "react-router-dom"
import styled from "styled-components"


const StyledSection = styled.section`
    padding: 16px 0;
    border-bottom: 1px solid silver;

`
const StyledLink = styled(NavLink)`
    display: block;
    width: 120px;
    background-color: #fff;
    padding: 5px 10px;
    margin-left: auto;
    margin-right: auto;
    /* border: 1px solid silver; */
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
    &:focus  {
      outline: none;
      /* border: 1px solid skyblue; */
      background-color: #87cfeb3b;
    }
  &.active {
    color: #fff;
    background-color: skyblue;
    /* border: 1px solid skyblue; */
  }
`

const NavList = styled.ul`
    list-style: none;

    display: flex;

`

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LogoLink = styled(NavLink)`
    width: 150px;
    /* display: block; */
    /* margin-right: 200px; */
`

const Logo = styled.img`
    width: 100%;
    display: block;

`


export const Navbar = () => {
    return (<StyledSection>
        <NavBar>

            <LogoLink to="/">
                <Logo src="./logo.jpg"></Logo>
            </LogoLink>

            <NavList>
                <li><StyledLink to="/">Shop</StyledLink></li>
                <li><StyledLink to="/cart">Cart</StyledLink></li>
                <li><StyledLink to="/orders">Orders</StyledLink></li>
            </NavList>

            <StyledLink to="/auth">Auth</StyledLink>

        </NavBar>
    </StyledSection>)
}