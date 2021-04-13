import Pet from './Pet'

const PetsList = (props) => {
    const { myPets } = props
    return(
        <div>
            <ul>
                {myPets.map(pet =>
                    <Pet 
                    pet={pet}
                    key={pet.id}
                    />)}
                    
            </ul>
        </div>
    )

}

export default PetsList