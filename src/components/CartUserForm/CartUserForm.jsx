import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { ClearCartThunk, createOrderThunk } from "redux/products/products.thunk";
import { useNavigate } from "react-router-dom";

import {StyledForm, StyledButton, TotalPrice, ToastContainer, ToastButton} from "./CartUserForm.styled"

export const CartUserForm = () => {
    const cart = useSelector(state => state.products.cart)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();

    const [name, setName] = useState(user.name);
    const [number, setNumber] = useState(user.phone);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);

    const nameInpudId = nanoid();
    const emailInpudId = nanoid();
    const phoneInpudId = nanoid();
    const addressInpudId = nanoid();
  
    const navigate = useNavigate();

    const onInputChange = (event) => {
      switch (event.target.name) {
        case "name": setName(event.target.value);
            break;
        case "number": setNumber(event.target.value);
            break;
        case "email": setEmail(event.target.value);
            break;
        case "address": setAddress(event.target.value);
            break;
      default: return;
        }
    }
  
  const rawTotalInit = 0;
  const rawTotal = cart.reduce((acc, item) => acc + item.price * item.count, rawTotalInit)

  const total = parseFloat(rawTotal.toFixed(2));

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createOrderThunk({cart, user: {email, name, number, address}, total}))
    
    dispatch(ClearCartThunk());

    toast((t) => (
      <ToastContainer>
        <div>
            <b>Your order has been created!</b>
            <br />
            Our manager will call in a moment!
            <ToastButton onClick={() => toast.dismiss(t.id)}>OK</ToastButton>
        </div>
      </ToastContainer>
    ));

    navigate("/orders")
  }

  return (
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
      <label htmlFor={phoneInpudId}>Number </label>    
      <input
        type="tel"
            name="number"
            id={phoneInpudId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
        onChange={onInputChange}
        required
          />
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
      <label htmlFor={addressInpudId}>Address </label>
      <input
        type="address"
        name="address"
        id={addressInpudId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Address may contain only letters, apostrophe, dash and spaces."
        value={address}
        onChange={onInputChange}
        required
        />
      <TotalPrice>${total}</TotalPrice>
      <StyledButton type="submit">Submit Order</StyledButton>
    </StyledForm>)
}