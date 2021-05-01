import Header from "../components/logOut/Header";
import About from "../components/logOut/About";
import ToSearchPage from "../components/logOut/ToSearchPage";
import LogInSignUp from "../components/logOut/LogInSignUp";

const HomeLogOut = () => {
  return (
    <div className="headerIn">
      <Header />
      <About />
      <div className="btnsLogout">
        <LogInSignUp />
        <ToSearchPage />
      </div>
    </div>
  );
};

export default HomeLogOut;
