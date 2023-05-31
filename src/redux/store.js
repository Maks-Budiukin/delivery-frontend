import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import { authInitState } from "./auth/auth.init-state";
import { authReducer } from "./auth/auth.slice";
import { shopsInitState } from "./shops/shops.init-state";
import { shopsReducer } from "./shops/shops.slice";
import { productsInitState } from "./products/products.init-state";
import { productsReducer } from "./products/products.slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const productsPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart", "enabledShop"],
};

const productsPersistedReducer = persistReducer(
  productsPersistConfig,
  productsReducer
);

const initState = {
  auth: authInitState,
  shops: shopsInitState,
  products: productsInitState,
};

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    shops: shopsReducer,
    products: productsPersistedReducer,
  },
  middleware: [thunk],
  devTools: true,
  preloadedState: initState,
});

export const persistor = persistStore(store);
