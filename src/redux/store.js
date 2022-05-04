import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import thunk from 'redux-thunk';


import rootReducer from './root-reducer';

const middlewares = [thunk];

const store = configureStore({reducer: rootReducer}, applyMiddleware(...middlewares));

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper;