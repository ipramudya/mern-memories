import { Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Homepage } from './containers';
import { CurrentIdAndFormProvider } from './context/currentIdAndForm';

const App = () => (
  <>
    <GlobalStyle />
    <CurrentIdAndFormProvider>
      <Route exact path="/" component={Homepage} />
    </CurrentIdAndFormProvider>
  </>
);

export default App;
