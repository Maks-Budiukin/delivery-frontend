import React from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { useState } from "react";
import { loginThunk, regThunk } from "redux/auth/auth.thunk";
import { useDispatch } from "react-redux";
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

const Header = styled.h1`
  color: skyblue;
  font-size: 48px;
`

export const Register = () => {

    const nameInpudId = nanoid();
    const emailInpudId = nanoid();
    const passwordInpudId = nanoid();
    const phoneInpudId = nanoid();
    const addressInpudId = nanoid();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
        const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("")
  
  const dispatch = useDispatch();

    const onInputChange = (event) => {
    switch (event.target.name) {
        case "name": setName(event.target.value);
            break;
        case "email": setEmail(event.target.value);
            break;
        case "password": setPassword(event.target.value);
            break;
                case "phone": setPhone(event.target.value);
            break;
        case "address": setAddress(event.target.value);
            break;
        default: return;
    }
    }
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    
      await dispatch(regThunk({name, email, password, phone, address}));
      dispatch(loginThunk({email, password}))
    // setName("");
    // setEmail("");
    //     setPassword("");
    //     setPhone("");
    //     setAddress("");
  }

    return(<Wrapper>
      <div>
        <Header>Sign UP!</Header>
        <StyledForm onSubmit={handleSubmit}>

    <label htmlFor={nameInpudId}>Name </label>
    <input
      type="text"
      name="name"
      id={nameInpudId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={name}
      onChange={onInputChange}
      required
        />
            
    <label htmlFor={emailInpudId}>Email </label>
    <input
      type="email"
      name="email"
      id={emailInpudId}
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      title="Email must have the following shape: email@email.com"
      value={email}
      onChange={onInputChange}
      required
        />
            
    <label htmlFor={passwordInpudId}>Password </label>    
    <input
      type="password"
          name="password"
          id={passwordInpudId}
          title="Password must be strong as teenager's erection!"
          value={password}
      onChange={onInputChange}
      required
            />
            
    <label htmlFor={phoneInpudId}>Phone </label>    
    <input
      type="tel"
          name="phone"
          id={phoneInpudId}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
      onChange={onInputChange}
      required
        />
    <label htmlFor={addressInpudId}>Address </label>
    <input
      type="text"
      name="address"
      id={addressInpudId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={address}
      onChange={onInputChange}
      required
        />
        

        <button type="submit">Sign Up</button>
        
        </StyledForm>
        <p>Already registered? </p>
        <StyledLink to="/login">Then Log IN!</StyledLink>
        </div>
        </Wrapper>
    )
}

