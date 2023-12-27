import { useState } from "react";
import { login } from "../services/AuthenticationService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    const credential = { username, password }
    try {
      await login(credential);
      navigate("/");
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
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
                  onChange={(e) => setUsername(e.target.value)} id='username' required
                />
              </div>

              <div className='input-group mb-3'>
                <input
                  type='password' className='form-control' placeholder='Password' value={password}
                  onChange={(e) => setPassword(e.target.value)} id='password' required
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={loading}>
                  {loading ? (
                    <span className="spinner-border spinner-border-sm"></span>
                  ) : <span>Login</span>}
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}