import { nanoid } from "nanoid";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/auth/auth.thunk";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
display: flex;
justify-content: center;
  padding: 24px 0;
  text-align: center;
`

const StyledForm = styled.form`
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
        &:focus  {
        outline: none;
        border: 1px solid skyblue;
        }
    }
    button {
    margin-left: auto;
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus  {
      outline: none;
      border: 1px solid skyblue;
    }
  }
`

const Header = styled.h1`
  color: skyblue;
  font-size: 48px;
`

const StyledLink = styled(NavLink)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 120px;
    background-color: #fff;
    padding: 5px 10px;
 
    /* border: 1px solid silver; */
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    background-color: #87cfeb3b;

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
      background-color: skyblue;
      color: #fff;
    }
  &.active {
    color: #fff;
    background-color: skyblue;
    /* border: 1px solid skyblue; */
  }
`

export const Login = () => {

    const emailInpudId = nanoid();
    const passwordInpudId = nanoid();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const onInputChange = (event) => {
    switch (event.target.name) {
      case "email": setEmail(event.target.value);
        break;
      case "password": setPassword(event.target.value);
        break;
      default: return;
    }
    }
    
    const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(loginThunk({email, password}))

    // setEmail("");
    // setPassword("");
  }

    return(<Wrapper>
      <div>
        <Header>Log IN!</Header>
        <StyledForm onSubmit={handleSubmit}>
    <label htmlFor={emailInpudId}>Email </label>
    <input
      type="email"
      name="email"
      id={emailInpudId}
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      
      value={email}
      onChange={onInputChange}
      required
        />
    <label htmlFor={passwordInpudId}>Password </label>    
    <input
      type="password"
          name="password"
          id={passwordInpudId}
          value={password}
      onChange={onInputChange}
      required
    />

        <button type="submit">Log In</button>
        
        </StyledForm>
        <p>Don't have an acc?</p>
        <StyledLink to="/register">Then sign up!</StyledLink>
        </div>
    </Wrapper>)
}