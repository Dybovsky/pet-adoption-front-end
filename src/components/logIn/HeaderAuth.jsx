import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const HeaderAuth = () => {
  const user = useContext(AuthContext).authUser;

  return (
    <header>
      <h3 className="headerTxt">
        {user && `Glad to see you again Mr.${user.firstName}`}
      </h3>
    </header>
  );
};

export default HeaderAuth;
