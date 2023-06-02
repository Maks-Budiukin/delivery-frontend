import { useDispatch, useSelector } from "react-redux"
import { logoutThunk } from "redux/auth/auth.thunk"
import { ClearCartThunk } from "redux/products/products.thunk"

import { StyledSection, StyledLink, StyledButton, NavList, NavBar, LogoLink, Logo, StyledClearButton, AuthBlock} from "./Navbar.styled"


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