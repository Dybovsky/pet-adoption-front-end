import ToSearchPage from "../components/logOut/ToSearchPage";

import ToMyPetsPage from "../components/logIn/ToMyPetsPage";
import ToSettings from "../components/logIn/ToSettings";

const HomeLogIn = () => {
  return (
    <div className="main-log-in">
      <div>
        <ToMyPetsPage />
        <ToSettings />
      </div>
      <div>
        <ToSearchPage />
      </div>
    </div>
  );
};

export default HomeLogIn;
