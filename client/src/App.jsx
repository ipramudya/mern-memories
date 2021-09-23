import { Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Homepage } from './containers';

const App = () => (
  <>
    <GlobalStyle />
    <Route exact path="/" component={Homepage} />
  </>
);

export default App;
