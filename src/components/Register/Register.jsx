import { nanoid } from "nanoid";
import { useState } from "react";
import { loginThunk, regThunk } from "redux/auth/auth.thunk";
import { useDispatch } from "react-redux";

import { Wrapper, StyledForm, LinkBlock, LinkLabel, StyledLink, StyledButton, Header } from "./Register.styled";

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
    
      const {error} = await dispatch(regThunk({ name, email, password, phone, address }));
      !error && dispatch(loginThunk({email, password}))
  }

  return (
    <Wrapper>
      <div>
        <Header>Sign UP!</Header>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor={nameInpudId}>Name </label>
          <input
            type="text"
            name="name"
            id={nameInpudId}
            title="Name may contain any symbols and be maximum 16 characters long."
            value={name}
            onChange={onInputChange}
            maxLength={16}
            required
              />
            
          <label htmlFor={emailInpudId}>Email </label>
          <input
            type="email"
            name="email"
            id={emailInpudId}
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
            title="Password must be at least 6 characters long!"
            value={password}
            onChange={onInputChange}
            minLength={6}
            required
                  />
            
          <label htmlFor={phoneInpudId}>Phone </label>    
          <input
            type="tel"
            name="phone"
            id={phoneInpudId}
            pattern="[+]38([0-9]{10})"
            title="Phone number must be digits in format +38XXXXXXXXXX (NO DASHES!)"
            minLength={13}
            maxLength={13}
            value={phone}
            onChange={onInputChange}
            required
              />
          
          <label htmlFor={addressInpudId}>Address </label>
          <input
            type="text"
            name="address"
            id={addressInpudId}
            title="Your address for deliveries."
            value={address}
            onChange={onInputChange}
            
              />
        
          <LinkBlock>
            <LinkLabel>Already registered? </LinkLabel>
            <StyledLink to="/login">Log IN!</StyledLink>
          </LinkBlock>

          <StyledButton type="submit">Sign Up!</StyledButton>

        </StyledForm>
      </div>
    </Wrapper>)
}

