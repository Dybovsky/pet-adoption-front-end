import {Link} from "react-router-dom";
import LogOut from '../lib/LogOut'
import {AuthContext} from '../components/AuthContext'
import { useContext } from "react";

const Navigation = () => {

  const authUser = useContext(AuthContext).authUser
    return (
      <div className='navigation'>
        {/* <Link to="/search">
            <ToSearchPage />
        </Link> */}
        <Link to="/">
       <div>
         <img src="LogoCat.png" width='120' height='100' alt='home'/>
       </div>
         </Link>
        {authUser && <LogOut />}
      </div>
    );
  };

  export default Navigation;