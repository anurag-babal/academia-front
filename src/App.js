import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Schedule from './components/Schedule';
import Students from './components/Students';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Schedule />} />
          <Route path='/students/:courseId' element={<Students />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
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
