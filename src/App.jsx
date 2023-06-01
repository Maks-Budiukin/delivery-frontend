import './App.css';
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "redux/auth/auth.thunk";

import { RestrictedRoute } from "./Routes/RestrictedRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";

import { Route, Routes } from "react-router-dom";
import { Shop } from "./Pages/Shop/Shop";
import { Cart } from "./Pages/Cart/Cart";
import { Orders } from "./Pages/Orders/Orders";
import { Auth } from "./Pages/Auth/Auth";
import { Layout } from "./components/Layout/Layout";
import { Login } from 'components/Login/Login';
import { Register } from 'components/Register/Register';

function App() {

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(refreshThunk());
    }
  }, [dispatch, token])
  
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<PrivateRoute component={Orders} redirectTo={'/'} />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<RestrictedRoute component={Login} redirectTo={'/'} />} />
          <Route path="/register" element={<RestrictedRoute component={Register} redirectTo={'/'} />} />
      </Route>
    </Routes>
  );
}

export default App;
