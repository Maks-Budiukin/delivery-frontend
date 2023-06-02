import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logoutThunk } from "redux/auth/auth.thunk"
import { ClearCartThunk } from "redux/products/products.thunk"
import styled from "styled-components"


const StyledSection = styled.section`
    /* padding: 16px 0; */
    border-bottom: 1px solid #c0c0c03e;
    color: #c0c0c03e;
`
const StyledLink = styled(NavLink)`
    display: block;
    width: 120px;
    background-color: #fff;
    padding: 5px 10px;
    margin-right: 24px; 
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

const StyledButton = styled.button`

    width: 120px;
    background-color: #fff;
    padding: 5px 10px;

    margin-right: 24px; 
    /* border: 1px solid silver; */
    outline: none;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-weight: 700;

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
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LogoLink = styled(NavLink)`
    width: 150px;
`

const Logo = styled.img`
    width: 100%;
    display: block;

`

const StyledClearButton = styled.button`

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

    &:hover
      {
      outline: none;
      background-color: tomato;
      color: #fff;
    }

`
const AuthBlock = styled.div`
    width: 300;
`


export const Navbar = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const cart = useSelector(state => state.products.cart)
    const dispatch = useDispatch();

    return (<StyledSection>
        <NavBar>

            <LogoLink to="/">
                <Logo src="./logo.jpg"></Logo>
            </LogoLink>

            <NavList>
                <li><StyledLink to="/">Shop</StyledLink></li>
                <li><StyledLink to="/cart">Cart</StyledLink></li>
                {isLoggedIn && <li><StyledLink to="/orders">Orders</StyledLink></li>}
            </NavList>
            <AuthBlock>
                {cart.length > 0 && <StyledClearButton type="button" onClick={() => dispatch(ClearCartThunk())}>Clear Cart</StyledClearButton>}
                {isLoggedIn? 
            <StyledButton type="button" onClick={() => dispatch(logoutThunk())}>Logout</StyledButton>
            : <StyledLink to="/register">Auth</StyledLink>
                }
                </AuthBlock>
        </NavBar>
    </StyledSection>)
}