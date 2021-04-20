import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const HeaderAuth = () => {
  const user = useContext(AuthContext).authUser;
  console.log(user);
  return (
    <header>
      <h3 className="headerTxt">
        {`Glad to see you again Mr.${user.firstName}`}
      </h3>
    </header>
  );
};

export default HeaderAuth;
