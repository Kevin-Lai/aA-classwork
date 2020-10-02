import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Todos App</h1>, root);
    const store = configureStore(); // redux - this is where we get the store
    // ReactDOM.render(<Root store={store}/>,root) 
    window.store = store;
    // window.store.getState(); // <--- preloadedstate?


})