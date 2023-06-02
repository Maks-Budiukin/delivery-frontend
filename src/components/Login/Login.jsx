import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/auth/auth.thunk";

import {Wrapper, StyledForm, Header, LinkBlock, LinkLabel, StyledLink, StyledButton} from "./Login.styled"

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
    }

  return (
    <Wrapper>
      <div>
        <Header>Log IN!</Header>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor={emailInpudId}>Email </label>
          <input
            type="email"
            name="email"
            id={emailInpudId}
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

          <LinkBlock>
            <LinkLabel>Don't have an acc? </LinkLabel>
            <StyledLink to="/register">Sign UP!</StyledLink>
          </LinkBlock>

        <StyledButton type="submit">Sign In!</StyledButton>
        
        </StyledForm>
      </div>
    </Wrapper>)
}
