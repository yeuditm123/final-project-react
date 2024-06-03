import 'antd/dist/antd.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
          <App />
          </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);


