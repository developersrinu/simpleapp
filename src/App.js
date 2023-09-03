import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './NavBar/Nav';
import HomePage from './HomePage/HomePage';
import History from './History/History';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/history' element={<History />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
