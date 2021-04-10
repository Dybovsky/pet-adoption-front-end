import {Link} from "react-router-dom";
//import ToSearchPage from "../components/logOut/ToSearchPage";
import LogOut from '../lib/LogOut'

const Navigation = () => {
    return (
      <div className='navigation'>
        {/* <Link to="/search">
            <ToSearchPage />
        </Link> */}
        <Link to="/">
       <div className='logoHome1'>
         <img src="LogoCat.png" width='70' height='60' alt='home'/>
       </div>
         </Link>
        <LogOut />
      </div>
    );
  };

  export default Navigation;