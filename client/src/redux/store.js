import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

export default createStore(
  reducers,
  //   compose(applyMiddleware(thunk))
  composeWithDevTools(applyMiddleware(thunk))
);
