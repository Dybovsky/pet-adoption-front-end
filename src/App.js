import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import localforage from "localforage";

import HomeLogOut from "./pages/HomeLogOut";
import HomeLogIn from "./pages/HomeLogIn";
import { AuthContext } from "./components/AuthContext";
import Search from "./pages/Search";
import Navigation from "./pages/Navigation";
import MyPetsPage from "./pages/MyPetsPage";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin.jsx";

import { editUser } from "./lib/data/apiUsers";

import PetPage from "./pages/PetPage";

function App() {
  const [authUser, setAuthUser] = useState(null);

  async function getAuthUser() {
    try {
      const user = await localforage.getItem("authUser");
      setAuthUser(user);
    } catch (err) {
      console.error(err);
    }
  }
  console.log("auth app", authUser);

  useEffect(() => {
    getAuthUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login: (us) => {
          setAuthUser(us);
          localforage.setItem("authUser", us);
        },
        logout: () => {
          setAuthUser(null);
          localforage.removeItem("authUser");
        },
        update: (usr) => {
          setAuthUser(usr);
          editUser(authUser, usr);
        },
      }}
    >
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <div className="main">
              {!authUser && <HomeLogOut />}
              {authUser && authUser.role === "admin" && <Admin />}
              {authUser && <HomeLogIn />}
            </div>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/myPets">
            <MyPetsPage />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/pet/:petId">
            <PetPage />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
