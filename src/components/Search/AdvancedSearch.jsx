import {useState} from 'react'

const AdvancedSearch = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const [ advancedSearch, setAdvancedSearch] = useState({
        type: '',
        name: '',
        status: '',
        height: '',
        weight: '',
    }) 

    const updateSearch = e => {
        setAdvancedSearch({
            ...advancedSearch,
            [e.target.name]: e.target.value
        });
    }



    return(
        <div>
            <h3>Advanced Search</h3>
            <form onSubmit={handleSubmit}>
                <label className='form-row'>
                    Type:
                    <input
                        value={advancedSearch.type}
                        name="type"
                        type="text"
                        onChange={updateSearch}
                    />
                </label>
                <label className='form-row'>
                    Name: 
                    <input
                        value={advancedSearch.name}
                        name="name"
                        type="text"
                        onChange={updateSearch}
                    />
                </label>
                <label className='form-row'>
                    Status: 
                    <input
                        value={advancedSearch.status}
                        name="status"
                        type="text"
                        onChange={updateSearch}
                    />
                </label>
                <label className='form-row'>
                    Height: 
                    <input
                        value={advancedSearch.height}
                        name="height"
                        type="number"
                        onChange={updateSearch}
                    />
                </label>
                <label className='form-row'>
                    Weight: 
                    <input
                        value={advancedSearch.weight}
                        name="name"
                        type="number"
                        onChange={updateSearch}
                    />
                </label>
                <button>Search</button>
            </form>
        </div>
    )
}

export default AdvancedSearch