import ToSearchPage from "../components/logOut/ToSearchPage";
import HeaderAuth from "../components/logIn/HeaderAuth";
import ToMyPetsPage from "../components/logIn/ToMyPetsPage";
import ToSettings from "../components/logIn/ToSettings";

const HomeLogIn = () => {
  return (
    <div>
      {/* <HeaderAuth /> */}
      <ToSearchPage />
      <ToMyPetsPage />
      <ToSettings />
    </div>
  );
};

export default HomeLogIn;
