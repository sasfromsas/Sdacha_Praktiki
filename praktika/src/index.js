import React from 'react';
import ReactDOM from 'react-dom/client'; // Используем createRoot вместо render
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

// Создаём root элемент и рендерим приложение
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
