import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/css/bootstrap.min.css'
import App from './App';
import { Provider } from 'react-redux'
import store from './JS/Store/store'
import 'bootstrap/dist/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {' '}
      <App />
      </Provider>
    </React.StrictMode>
)

