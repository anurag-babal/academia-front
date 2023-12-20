import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Students from './components/Students';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/students/:courseId' element={<Students />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
