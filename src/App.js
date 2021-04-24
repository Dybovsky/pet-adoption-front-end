import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeLogOut from "./pages/HomeLogOut";
import HomeLogIn from "./pages/HomeLogIn";
import { AuthContext } from "./components/AuthContext";
import Search from "./pages/Search";
import Navigation from "./pages/Navigation";
import MyPetsPage from "./pages/MyPetsPage";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin.jsx";
import { getPets } from "./lib/data/pets";
import { getUsers } from "./lib/data/apiUsers";

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
    getPets().then((pets) => {
      setPets(pets.pets);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login: (us) => {
          setAuthUser(us);
        },
        logout: () => setAuthUser(null),
        update: (usr) => setAuthUser(usr),
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
