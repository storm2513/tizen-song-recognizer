import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(middleware), );
