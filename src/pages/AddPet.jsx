import { useState, useContext } from "react";
import { addPet, setPetImage } from "../lib/data/pets";
import { AuthContext } from "../components/AuthContext";

const AddPet = () => {
  const [pic, setPic] = useState(null);
  const authUser = useContext(AuthContext).authUser;
  const token = authUser.token;
  const [newPet, setNewPet] = useState({
    type: "",
    breed: "",
    name: "",
    status: "",
    height: 0,
    weight: 0,
    picture: "",
    color: "",
    bio: "",
    allergy: "",
    diet: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet(newPet, token);
    setNewPet({
      type: "",
      breed: "",
      name: "",
      status: "",
      height: 0,
      weight: 0,
      picture: null,
      color: "",
      bio: "",
      allergy: "",
      diet: "",
    });
    // setPetImage(, );
  };
  const updateNewPet = (e) => {
    setNewPet({
      ...newPet,
      [e.target.name]: e.target.value,
    });
  };

  // const updateNewPetPic = (e) => {
  //   setPic(e.target.files[0].);
  // };

  return (
    <div>
      <h3>Add Pet</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-row">
          Type:
          <input
            value={newPet.type}
            name="type"
            type="text"
            onChange={updateNewPet}
          />
        </label>
        <label className="form-row">
          Breed:
          <input
            value={newPet.breed}
            name="breed"
            type="text"
            onChange={updateNewPet}
          />
        </label>
        <label className="form-row">
          Name:
          <input
            value={newPet.name}
            name="name"
            type="text"
            onChange={updateNewPet}
          />
        </label>
        <label className="form-row">
          Status:
          <input
            value={newPet.status}
            name="status"
            type="text"
            onChange={updateNewPet}
          />
        </label>
        <label className="form-row">
          Height:
          <input
            value={newPet.height}
            name="height"
            type="number"
            onChange={updateNewPet}
          />
        </label>
        <label className="form-row">
          Weight:
          <input
            value={newPet.weight}
            name="weight"
            type="number"
            onChange={updateNewPet}
          />
        </label>
        <label className="form-row">
          Picture:
          <input
            value={newPet.picture}
            name="picture"
            type="file"
            onChange={updateNewPet}
            //onChange={(e) => setPic(e.target.files[0])}
          />
        </label>
        <label className="form-row">
          Color:
          <input
            value={newPet.color}
            name="color"
            type="text"
            onChange={updateNewPet}
          />
        </label>
        <label className="form-row">
          Bio:
          <input
            value={newPet.bio}
            name="bio"
            type="text"
            onChange={updateNewPet}
          />
        </label>
        <label className="form-row">
          Allergy:
          <input
            value={newPet.allergy}
            name="allergy"
            type="text"
            onChange={updateNewPet}
          />
        </label>
        <label className="form-row">
          Diet:
          <input
            value={newPet.diet}
            name="diet"
            type="text"
            onChange={updateNewPet}
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddPet;
