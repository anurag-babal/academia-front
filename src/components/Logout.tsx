import { useEffect } from "react";
import { logout } from "../services/AuthenticationService";

const Logout = () => {
  useEffect(() => {
    logout();
  }, []);
  return null;
};

export default Logout