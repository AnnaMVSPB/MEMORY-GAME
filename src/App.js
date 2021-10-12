
import { Provider } from 'react-redux';
import './App.css';
import Menu from './Components/Menu';
import store from './Components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Menu/>,
 
    </Provider>
  );
}

export default App;
