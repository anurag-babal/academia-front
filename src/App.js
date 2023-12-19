import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';

import loginService from './services/login'

import Notification from './components/Notification';
import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
import Students from './components/Students';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  const handleNotification = (message, type) => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification(null);
      setNotificationType(null);
    }, 3000)
  }

  const handleLogin = async (credential) => {
    try {
      const response = await loginService.login(credential);
      console.log(response.data);
      setUser(response.data);
      window.localStorage.setItem('loggedInUser', JSON.stringify(response.data));
      handleNotification('Welcome ' + response.data.username, 'success');
    } catch (error) {
      handleNotification('Username or password incorrect', 'danger');
    }
  }

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <div className="App">
      <Notification message={notification} type={notificationType} />
      {
        user === null && <Login startLogin={handleLogin} />
      }
      {
        user !== null && <NavBar user={user} setUser={setUser} />
      }
      {
        user !== null &&
        <Routes>
          <Route path='/' element={<Schedule user={user} onError={handleNotification}/>} />
          <Route path='/students/:courseId' element={<Students onError={handleNotification} user={user}/>} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      }
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>404: Page Not Found</h2>
    </div>
  )
}

export default App;
