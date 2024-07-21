import { combineReducers } from 'redux';
import invoiceReducer from './invoiceReducer';
import productReducer from './productReducer'; // Jika ada reducer lain

const rootReducer = combineReducers({
  invoice: invoiceReducer,
  products: productReducer,
});

export default rootReducer;
