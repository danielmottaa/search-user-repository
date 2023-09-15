import { BrowserRouter } from 'react-router-dom';
import * as S from './styles'
import Routes from './screens/routes/routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
   <BrowserRouter>
   <Provider store={store}>
    <S.Container>
    <Routes />
    </S.Container>
   </Provider>
   </BrowserRouter>
  );
}

export default App;
