
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';
import {Provider} from 'react-redux';

// Define your initial state and reducer
const initialState = {
  // Your initial state properties go here
  // For example:
  user: {id:5},
};

// Create the Redux store with configureStore
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  // Enable Redux DevTools extension
  devTools: process.env.NODE_ENV !== 'production',
});

export default function ReduxProvider({children, externalStore = store}){
  return <Provider store={externalStore}>{children}</Provider>;
};