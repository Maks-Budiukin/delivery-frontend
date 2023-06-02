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
        
          <LinkBlock>
            <LinkLabel>Already registered? </LinkLabel>
            <StyledLink to="/login">Log IN!</StyledLink>
          </LinkBlock>

          <StyledButton type="submit">Sign Up!</StyledButton>

        </StyledForm>
      </div>
    </Wrapper>)
}

