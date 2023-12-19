import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ startLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const credential = { username, password }
    startLogin(credential);
    setUsername('');
    setPassword('');
  }

  return (
    <div className='container w-25 my-5 justify-content-center'>
      <div className="row  border-dark align-items-center">
        <div className="card rounded border-dark shadow g-0">
          <div className="card-header">
            <h1>Login</h1>
          </div>
          <div className='card-body g-2'>
            <form onSubmit={handleSubmit} id='login-form'>
              <div className='input-group mb-3'>
                <input
                  type='text' className='form-control mt-4' placeholder='Username' value={username}
                  onChange={event => setUsername(event.target.value)} id='username' required
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  type='password' className='form-control' placeholder='Password' value={password}
                  onChange={event => setPassword(event.target.value)} id='password' required
                />
              </div>
              <button type='submit' className='btn btn-primary btn-block mb-4' id='login-submit'>LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}