import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { deletePet, returnPet, takePet } from "../../lib/data/pets";
import { Link } from "react-router-dom";

const PetDetails = ({ pet, refreshPets, closeModal }) => {
  let authUser = useContext(AuthContext).authUser;
  if (!authUser)
    return <div>Look but don't touch! Enter your account to continue 🙀</div>;
  let token = authUser.token;

  // const saveCat = () => {
  //   authUser.savedPets = [];
  //   authUser.savedPets.push(pet.id);
  // };

  // let isAdopted = pet.status === "adopted";
  // let isFoster = pet.status === "foster";
  let isAdmin = authUser.role === "admin";
  let isAvailable = !pet.Owner_Id;
  let isMyPet = pet.Owner_Id === authUser.id;
  let isFostered = pet.status === "fostered";

  let status = isFostered ? "adopted" : "fostered";

  return (
    <div className="pet-details">
      <div>
        <img
          src={pet.picture}
          alt="cat"
          className="catImg"
          onClick={() => closeModal()}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>Name: {pet.name}</div>
      <div>Status: {pet.status}</div>
      <div>Type: {pet.type}</div>
      <div>Height: {pet.height}</div>
      <div>Weight: {pet.weight}</div>
      <div>Color: {pet.color}</div>
      <div>Bio: {pet.bio}</div>
      <div>Allergy: {pet.allergy ? "Yes" : "No"}</div>
      <div>Diet: {pet.diet}</div>

      {/* {(isFoster || isAdopted) && <button>Return pet</button>} */}
      {/* <button onClick={() => saveCat()}>
        {pet.saved ? "Remove from saves" : "Save"}
      </button> */}
      {isMyPet && (
        <button
          className="btn-primary"
          onClick={() => {
            returnPet(pet.id, token);
            refreshPets(token);
            closeModal();
          }}
        >
          Return
        </button>
      )}
      {isAdmin && (
        <button
          className="btn-primary"
          onClick={() => {
            deletePet(pet.id, token);
            refreshPets(token);
            closeModal();
          }}
        >
          Delete
        </button>
      )}
      <Link to={`pet/${pet.id}`}>
        {isAdmin && <button className="btn-primary">Edit</button>}
      </Link>
      {(isAvailable || isFostered) && (
        <button
          className="btn-primary"
          onClick={() => {
            takePet(pet.id, token, status);
            refreshPets(token);
            closeModal();
          }}
        >
          {isFostered ? "Adopt" : "Foster"}
        </button>
      )}
    </div>
  );
};
export default PetDetails;
