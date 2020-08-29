import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import './index.css';
import  DetalleApp from './components/DetalleApp';



import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <DetalleApp/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
