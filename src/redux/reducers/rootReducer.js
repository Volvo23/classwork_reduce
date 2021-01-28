import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import contactsReducer from "./contactsReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
