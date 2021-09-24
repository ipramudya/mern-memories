import { Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Auth, Homepage } from './containers';
import { CurrentIdAndFormProvider } from './context/currentIdAndForm';

const App = () => (
  <>
    <GlobalStyle />
    <CurrentIdAndFormProvider>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/auth" component={Auth} />
    </CurrentIdAndFormProvider>
  </>
);

export default App;
