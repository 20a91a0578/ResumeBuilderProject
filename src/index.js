import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Template from './components/template';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>

{/* <Template/> */}
<App/>
  </React.StrictMode>
);
reportWebVitals();

