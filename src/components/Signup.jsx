import { useState } from "react";
import { register } from "../services/UserService";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { username, password };
    register(data);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h1 className="text-center mb-4">Sign Up</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
}

export default Signup;