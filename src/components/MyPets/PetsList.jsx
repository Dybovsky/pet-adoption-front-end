import Pet from "./Pet";

const PetsList = (props) => {
  const { pets } = props;

  return (
    <div>
      <ul className="pets-list">
        {pets.map((pet) => (
          <Pet pet={pet} key={pet.id} refreshPets={props.refreshPets} />
        ))}
      </ul>
    </div>
  );
};

export default PetsList;
