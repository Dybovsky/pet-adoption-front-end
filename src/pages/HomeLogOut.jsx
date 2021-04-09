import Header from '../components/logOut/Header';
import About from '../components/logOut/About';
import ToSearchPage from  '../components/logOut/ToSearchPage';
import LogInSignUp from '../components/logOut/LogInSignUp';

const HomeLogOut = () => {



    return(
        <div>
            <Header />
            <About />
            <LogInSignUp />
            <ToSearchPage />
        </div>
    )
}

export default HomeLogOut;