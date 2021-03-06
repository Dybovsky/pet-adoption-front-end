import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import {
  deletePet,
  returnPet,
  savePet,
  takePet,
  unsavePet,
} from "../../lib/data/pets";
import { Link } from "react-router-dom";
import ToggleSave from "./ToogleSave";
import { v4 as uuidv4 } from "uuid";
import localforage from "localforage";

const PetDetails = ({ pet, refreshPets, closeModal }) => {
  let authUser = useContext(AuthContext).authUser;
  if (!authUser)
    return <div>Look but don't touch! Enter your account to continue 🙀</div>;
  let token = authUser.token;

  const id = uuidv4();
  const onSavePet = async (petId, token) => {
    localforage.setItem("transId", id);
    await savePet(id, petId, token);
  };

  const onToggleSave = async () => {
    pet.saved = !pet.saved;
    pet.saved && (await onSavePet(pet.id, token));
    !pet.saved && (await onUnsavePet());
  };

  const onUnsavePet = async () => {
    if (localforage.getItem("transId")) {
      const id = await localforage.getItem("transId");
      await unsavePet(id, token);
    }
  };

  let isAdmin = authUser.role === "admin";
  let isAvailable = !pet.Owner_Id;
  let isMyPet = pet.Owner_Id === authUser.id;
  let isFostered = pet.status === "fostered";

  let status = isFostered ? "adopted" : "fostered";
  let isSaved = pet.saved;

  return (
    <div>
      <div
        className="pet-details"
        onClick={() => closeModal()}
        style={{ cursor: "pointer" }}
      >
        <div>
          <img src={pet.picture} alt="cat" className="catImg" />
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
      </div>

      <div className="pet-card-btn">
        {isMyPet && (
          <button
            className="btn-primary"
            onClick={async () => {
              await returnPet(pet.id, token);
              await refreshPets(token);
            }}
          >
            Return
          </button>
        )}
        {isAdmin && (
          <button
            className="btn-primary"
            onClick={async () => {
              await deletePet(pet.id, token);
              await refreshPets(token);
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
            onClick={async () => {
              await takePet(pet.id, token, status);
              await refreshPets(token);
            }}
          >
            {isFostered ? "Adopt" : "Foster"}
          </button>
        )}
        <ToggleSave
          onToggleSave={onToggleSave}
          isSaved={isSaved}
          refreshPets={() => {
            refreshPets(token);
          }}
        ></ToggleSave>
      </div>
    </div>
  );
};
export default PetDetails;
