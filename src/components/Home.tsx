import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/User";
import { getCurrentUser } from "../services/AuthenticationService";

const Home = () => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    setUser(getCurrentUser());
  }, [])

  return (
    <>
      {!user && (
        <>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn">Signup</button>
          </Link>
        </>
      )}
      {user && (
        <>
          <h4>Welcome {user.sub}</h4>
          <Link to="/logout">
            <button className="btn">Logout</button>
          </Link>
        </>
      )}
    </>
  );
};

export default Home;