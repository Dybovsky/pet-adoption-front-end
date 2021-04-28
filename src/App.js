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
import { getPets } from "./lib/data/pets";
import { getUsers, editUser } from "./lib/data/apiUsers";
import PetDetails from "./components/MyPets/PetDetails";
import PetPage from "./pages/PetPage";

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);

  async function getAuthUser() {
    try {
      const user = await localforage.getItem("authUser");
      setAuthUser(user);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
    getPets().then((pets) => {
      setPets(pets.pets);
    });
    getAuthUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login: (us) => {
          setAuthUser(us);
          localforage.setItem("authUser", us);
          // let test = await localforage.getItem("authUser");
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
              {authUser && authUser.role === "admin" && (
                <Admin users={users} pets={pets} />
              )}
              {authUser && <HomeLogIn />}
            </div>
          </Route>
          <Route path="/search">
            <Search pets={pets} />
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
          {/* <Route path="/advanced_search">
            <AdvancedSearch />
          </Route> */}
          {/* <Route path="/admin">
            <Admin users={users} pets={pets} />
          </Route> */}
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
