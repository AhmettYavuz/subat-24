import { combineReducers, legacy_createStore } from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";

const reducers = combineReducers({
  global: globalReducer,
  products: productReducer,
});

// App Global State === store
export const store = legacy_createStore(reducers);
