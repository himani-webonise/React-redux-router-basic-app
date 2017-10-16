import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerReducer from '../reducers/RegisterReducer';

//TODO: Correct line#2 path

export const store = createStore(registerReducer,
    compose(applyMiddleware(thunk))
);