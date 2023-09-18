import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// IMPORT DI BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// imports di redux toolkit
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducerState from './reducers/booksReducer'

const reducer = combineReducers({
    booksStore: booksReducerState
})

const store = configureStore({
    reducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
