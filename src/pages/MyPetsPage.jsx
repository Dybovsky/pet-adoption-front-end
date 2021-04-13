import { useState, useEffect} from 'react'
import PetsList from '../components/MyPets/PetsList'
import Toggle from '../components/MyPets/Toggle' 
import allPets from '../MocData/allPets.js'


const MyPetsPage = () => {

    
    
 
    const [ myPets, setMyPets] = useState(allPets)
    const [ isChecked, setIsChecked] = useState(true)

    const onToggle = (val) => {
        setIsChecked(val)
    }
    let savedPets = allPets.filter(pet => pet.saved)
    
    useEffect(() => {

        isChecked ? setMyPets(savedPets) : setMyPets(allPets)
    },[isChecked])


    return(
        <div>
            <Toggle onToggle={onToggle}/>
            {!myPets && <h2>You dont have any fat cats</h2>}
            {myPets && <PetsList myPets={myPets}/>}
        </div>
    )

}

export default MyPetsPage