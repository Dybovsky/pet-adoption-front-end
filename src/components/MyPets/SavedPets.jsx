import Pet from './Pet'

const SavedPets = (props) => {
    const { myPets } = props
    return(
        <div>
            <ul>
                {myPets.map(pet =>
                    <Pet 
                    pet={pet}
                    key={pet.id}
                    />)}
                    {console.log(myPets)}
            </ul>
        </div>
    )

}

export default SavedPets