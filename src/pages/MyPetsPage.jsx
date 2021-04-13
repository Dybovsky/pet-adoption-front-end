import { useState } from 'react'
import SavedPets from '../components/MyPets/SavedPets'



const MyPetsPage = () => {

    
    const fatBarsik = {
        id: Date.now()+1,
        image: 'cat',
        name: 'Barsik',
        status: 'foster/adopted',
    }

    const fatMurzik = {
        id: Date.now(),
        image: 'cat',
        name: 'Murzik',
        status: 'foster/adopted',
    }



    const [ myPets, setMyPets] = useState([fatBarsik, fatMurzik])

    return(
        <div>

            {!myPets && <h2>You dont have any fat cats</h2>}
            {myPets && <SavedPets myPets={myPets}/>}
        </div>
    )

}

export default MyPetsPage