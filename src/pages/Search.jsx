import {useState} from 'react'
import { Link } from "react-router-dom";
import ToAdvancedSearchBtn from '../components/Search/ToAdvancedSearchBtn'

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
            <ToAdvancedSearchBtn />
        </div>
    )
}

export default Search