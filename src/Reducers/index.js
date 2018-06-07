import { createStore, combineReducers } from "redux";
import photos from "./photos";


const reducer = combineReducers({
    photos
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;