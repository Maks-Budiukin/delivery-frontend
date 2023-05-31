import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
  key: "root",
  storage,
  whitelist: ["token", "products"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  shops: shopsReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initState = {
  auth: authInitState,
  shops: shopsInitState,
  products: productsInitState,
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: true,
  preloadedState: initState,
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//     shops: shopsReducer,
//     products: productsReducer,
//   },
//   middleware: [thunk],
//   devTools: true,
//   preloadedState: initState,
// });
