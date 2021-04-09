import { useState } from "react";
import HomeLogOut from "./pages/HomeLogOut";
import HomeLogIn from "./pages/HomeLogIn";
import { AuthContext } from "./components/AuthContext";

function App() {
  const user = { firstName: "vasya" };

  const [authUser, setAuthUser] = useState(user);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login: () => setAuthUser(user),
        logout: () => setAuthUser(null),
      }}
    >
      <div>
        {!authUser && <HomeLogOut />}
        {authUser && <HomeLogIn />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
