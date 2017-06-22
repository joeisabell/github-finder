import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import routes from './components/routes';
import './index.css';

ReactDOM.render(
  <HashRouter>
    { routes }
  </HashRouter>
  , document.getElementById('root'));
registerServiceWorker();
