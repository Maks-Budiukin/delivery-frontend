import './App.css';
import { Route, Routes } from "react-router-dom";
import { Shop } from "./Pages/Shop/Shop";
import { Cart } from "./Pages/Cart/Cart";
import { Orders } from "./Pages/Orders/Orders";
import { Auth } from "./Pages/Auth/Auth";
import { Layout } from "./components/Layout/Layout";

function App() {

  
  return (
    <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path="/"
            element={<Shop />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/orders"
            element={<Orders />}
          />
          <Route
            path="/auth"
            element={<Auth />}
          />  
      </Route>
      
      </Routes>
  );
}

export default App;
