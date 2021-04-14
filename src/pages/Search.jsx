import {useState} from 'react'
import { Link } from "react-router-dom";

const Search = () => {

    const [searchField, setSearchField] = useState('')

    const handleInput = e => {setSearchField(e.target.value)}

    return(
        <div>
            <label htmlFor='search'>
                <input 
                    type='search'
                    onChange={handleInput}/>
            </label>
            <button>Search</button>
            <button ><Link to="/advanced_search">more fields</Link></button>
        </div>
    )
}

export default Search