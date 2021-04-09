import { useContext } from "react"
import { AuthContext } from "../AuthContext"

const HeaderAuth = () => {

    const user = useContext(AuthContext).authUser;

    return(
        <header>
                {`Glad to see you again Mr.${user.firstName}`}
        </header>
    )
}

export default HeaderAuth