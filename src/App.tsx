import { BrowserRouter } from 'react-router-dom';
import classModule from './App.module.css'
import Routes from './screens/routes/routes';
import { Provider } from 'react-redux';
import store from './screens/store';

function App() {
  return (
   <BrowserRouter>
   <Provider store={store}>
    <div className={classModule.app}>
    <Routes />
    </div>
   </Provider>
   </BrowserRouter>
  );
}

export default App;
