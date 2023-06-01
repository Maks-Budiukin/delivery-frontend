import { nanoid } from "nanoid";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/auth/auth.thunk";
import { NavLink } from "react-router-dom";


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

    return(<>
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
        <NavLink to="/register">Then sign up!</NavLink>
    </>)
}
