import Pet from "./Pet";

const PetsList = (props) => {
  const { pets } = props;

  return (
    <div>
      <ul>
        {pets.map((pet) => (
          <Pet pet={pet} key={pet.id} />
        ))}
      </ul>
    </div>
  );
};

export default PetsList;
