
import { Provider } from 'react-redux';
import './App.css';
import Cards from './Components/Cards';
import store from './Components/redux/store';

function App() {
  return (
    <Provider store={store}>
 <Cards/>
    </Provider>
  );
}

export default App;
