import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeLogOut from "./pages/HomeLogOut";
import HomeLogIn from "./pages/HomeLogIn";
import { AuthContext } from "./components/AuthContext";
import Search from "./pages/Search";
import Navigation from "./pages/Navigation";
import MyPetsPage from "./pages/MyPetsPage";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin.jsx";

function App() {
  const [authUser, setAuthUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login: (us) => setAuthUser(us),
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
          {/* <Route path="/advanced_search">
            <AdvancedSearch />
          </Route> */}
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
