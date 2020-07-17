import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const initialState = {};

const middleware = [thunk];

//changed this line so that the applicationn works without the redux devtools installed
const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware),
));

//uncomment this line if you want the redux devtools version
/*
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
*/
export default store;