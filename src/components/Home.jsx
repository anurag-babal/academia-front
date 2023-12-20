import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/AuthenticationService";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);

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
          <h4>Welcome {user.name}</h4>
          <Link to="/logout">
            <button className="btn">Logout</button>
          </Link>
        </>
      )}
    </>
  );
};

export default Home;