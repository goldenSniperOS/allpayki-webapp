import { applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));