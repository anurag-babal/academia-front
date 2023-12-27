import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import { NavBar } from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import Signup from './components/Signup';

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}
