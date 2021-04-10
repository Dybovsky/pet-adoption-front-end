import { Link} from "react-router-dom"
const ToSearchPage = () => {

    return(
        <div>
            <Link
            to='/search'
            >
            <button>Start Search</button>
            </Link>
           
        </div>
    )
}

export default ToSearchPage