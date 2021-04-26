import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { deletePet } from "../../lib/data/pets";
import { Link } from "react-router-dom";

const PetDetails = ({ pet }) => {
  let authUser = useContext(AuthContext).authUser;

  const saveCat = () => {
    authUser.savedPets = [];
    authUser.savedPets.push(pet.id);
  };

  let isAdopted = pet.status === "adopted";
  let isFoster = pet.status === "foster";
  console.log(pet);
  return (
    <div>
      <div>
        <img src={pet.picture} alt="cat" />
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

      {(isFoster || isAdopted) && <button>Return pet</button>}
      <button onClick={() => saveCat()}>
        {pet.saved ? "Remove from saves" : "Save"}
      </button>
      <button onClick={() => deletePet()}>Delete</button>
      <Link to={`pet/${pet.id}`}>To pet page</Link>
    </div>
  );
};
export default PetDetails;
