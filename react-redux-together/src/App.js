import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import CakeContainerHooks from './components/CakeContainerHooks'
import IcecreamContainer from './components/IcecreamContainer';
import PayloadCakeContainer from './components/PayloadCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IcecreamContainer />
        <CakeContainerHooks />
        <PayloadCakeContainer />
        <ItemContainer cake/>
        <ItemContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
