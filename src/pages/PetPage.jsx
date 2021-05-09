import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { editPet, getPetById } from "../lib/data/pets";
import { AuthContext } from "../components/AuthContext";

const PetPage = () => {
  const token = useContext(AuthContext).authUser.token;
  const { petId } = useParams();

  let [editedPet, setEditedPet] = useState({
    type: "",
    breed: "",
    name: "",
    status: "",
    height: "",
    weight: "",
    picture: "",
    color: "",
    bio: "",
    allergy: "",
    diet: "",
  });

  useEffect(() => {
    getPetById(petId, token).then((resp) => {
      setEditedPet(resp.data.response[0]);
    });
  }, [petId, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPet(petId, editedPet, token);
  };
  const updateEditedPet = (e) => {
    setEditedPet({
      ...editedPet,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h3>Edit Pet</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-row">
          Type:
          <input
            value={editedPet.type}
            name="type"
            type="text"
            onChange={updateEditedPet}
          />
        </label>
        <label className="form-row">
          Breed:
          <input
            value={editedPet.breed}
            name="breed"
            type="text"
            onChange={updateEditedPet}
          />
        </label>
        <label className="form-row">
          Name:
          <input
            value={editedPet.name}
            name="name"
            type="text"
            onChange={updateEditedPet}
          />
        </label>
        <label className="form-row">
          Status:
          <input
            value={editedPet.status}
            name="status"
            type="text"
            onChange={updateEditedPet}
          />
        </label>
        <label className="form-row">
          Height:
          <input
            value={editedPet.height}
            name="height"
            type="number"
            onChange={updateEditedPet}
          />
        </label>
        <label className="form-row">
          Weight:
          <input
            value={editedPet.weight}
            name="weight"
            type="number"
            onChange={updateEditedPet}
          />
        </label>
        <label className="form-row">
          Picture:
          <input name="picture" type="file" onChange={updateEditedPet} />
        </label>
        <label className="form-row">
          Color:
          <input
            value={editedPet.color}
            name="color"
            type="text"
            onChange={updateEditedPet}
          />
        </label>
        <label className="form-row">
          Bio:
          <input
            value={editedPet.bio}
            name="bio"
            type="text"
            onChange={updateEditedPet}
          />
        </label>
        <label className="form-row">
          Allergy:
          <input
            value={editedPet.allergy}
            name="allergy"
            type="text"
            onChange={updateEditedPet}
          />
        </label>
        <label className="form-row">
          Diet:
          <input
            value={editedPet.diet}
            name="diet"
            type="text"
            onChange={updateEditedPet}
          />
        </label>
        <button className="btn-primary">Edit</button>
      </form>
    </div>
  );
};

export default PetPage;
