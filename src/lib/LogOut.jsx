import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { Link } from "react-router-dom";

const LogOut = () => {
  const user = useContext(AuthContext);

  return (
    <Link to="/">
      <button className="btn-primary" onClick={user.logout}>
        Log Out
      </button>
    </Link>
  );
};
export default LogOut;
