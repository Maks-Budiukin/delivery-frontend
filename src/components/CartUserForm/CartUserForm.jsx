import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { ClearCartThunk, createOrderThunk } from "redux/products/products.thunk";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
margin-top: 16px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
height: 170px;
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
    
`

const StyledButton = styled.button`
    display: block;
    margin-left: auto;
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid skyblue;
    border-radius: 4px;
    color: skyblue;
    font-weight: bold;

    transition-property: color, background-color, border;
    transition-duration: 250ms;
    transition-timing-function: ease;

    &:hover,
    &:focus  {
      background-color: skyblue;
      color: #fff;
      border: 1px solid skyblue;
    }
  `

const TotalPrice = styled.p`
    font-weight: bold;
    margin: 8px;
    font-size: 36px;
`

const ToastContainer = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ToastContent = styled.div`
  
`

const ToastButton = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid skyblue;
    border-radius: 4px;
    color: skyblue;
    font-weight: bold;

    transition-property: color, background-color, border;
    transition-duration: 250ms;
    transition-timing-function: ease;

    &:hover,
    &:focus  {
      background-color: skyblue;
      color: #fff;
      border: 1px solid skyblue;
    }
  `

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
  const rawTotal = cart.reduce((acc, item) => acc + item.price * item.count,
    rawTotalInit
  )

  const total = parseFloat(rawTotal.toFixed(2));
  console.log(total)

  const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(createOrderThunk({cart, user: {email, name, number, address}, total}))



        setName("");
        setNumber("");
        setEmail("");
        setAddress("");
    
    dispatch(ClearCartThunk());
    // toast.success("Your order is posted!")

    toast((t) => (
      <ToastContainer>
        <ToastContent>
        <b>Your order has been created!</b>
        <br />
        Our manager will call in a moment!
        <ToastButton onClick={() => toast.dismiss(t.id)}>
          OK
          </ToastButton>
          </ToastContent>
      </ToastContainer>
    ));


    navigate("/orders")
  }

    return(<><StyledForm onSubmit={handleSubmit}>
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
        
    </StyledForm></>)
}