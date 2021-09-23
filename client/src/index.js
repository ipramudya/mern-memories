import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Provider store={store}>
          <App />
        </Provider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
