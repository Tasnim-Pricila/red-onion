import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './shared/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/home' element={<Home></Home>}> </Route>
            <Route path='/login' element={<Login></Login>} > </Route>
            <Route path='/signup' element={<Signup></Signup>}> </Route>
            <Route path='/cart' element={
              <RequireAuth>
                  <Cart></Cart>
              </RequireAuth>
            }> 
            </Route>
            <Route path='*' element={<NotFound></NotFound>}> </Route>
        </Routes>
    </div>
  );
}

export default App;
