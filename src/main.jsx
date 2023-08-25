import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/global.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./store";
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
