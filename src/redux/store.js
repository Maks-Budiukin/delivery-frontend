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

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const initState = {
  auth: authInitState,
  shops: shopsInitState,
  products: productsInitState,
};

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    shops: shopsReducer,
    products: productsReducer,
  },
  middleware: [thunk],
  devTools: true,
  preloadedState: initState,
});

export const persistor = persistStore(store);
