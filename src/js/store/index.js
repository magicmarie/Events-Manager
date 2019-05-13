import rootReducer from "../reducers/rootReducer";
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import  { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];

// createStore takes a reducer as the first argument
//reducers produce the state of the app
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
