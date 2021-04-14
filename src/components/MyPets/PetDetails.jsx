import {AuthContext} from '../AuthContext'
import {useContext} from 'react'

const PetDetails = ({pet}) => {

    let authUser = useContext(AuthContext).authUser
    console.log(authUser)

    const saveCat = () => {
        authUser.savedPets = [];
        authUser.savedPets.push(pet.id)}
    
    let isAdopted = pet.status == 'adopted';
    let isFoster = pet.status == 'foster';
    return(
        <div>
           
             <div>
                <img src={pet.image}
                    alt='cat'     
                />
             </div>
             <div>Name: {pet.name}</div>
             <div>Status: {pet.status}</div>
             <div>Type: {pet.type}</div>
             <div>Height: {pet.height}</div>
             <div>Weight: {pet.weight}</div>
             <div>Color: {pet.color}</div>
             <div>Bio: {pet.bio}</div>
             <div>Allergy: {pet.allergy}</div>
             <div>Diet: {pet.diet}</div>
            
            {(isFoster || isAdopted ) && <button>Return pet</button>}
             <button onClick={()=>saveCat}>{pet.saved ? 'Remove from saves' : 'Save'}</button>

             
        </div>
    )
    }
export default PetDetails