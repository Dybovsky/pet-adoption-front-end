import axios from "axios";
import { useState } from "react";

const AddPet = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    savePet(newPet);
  };

  const [newPet, setNewPet] = useState({
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

  const updateNewPet = (e) => {
    setNewPet({
      ...newPet,
      [e.target.name]: e.target.value,
    });
  };

  const savePet = async (pet) => {
    const json = JSON.stringify(pet);
    console.log(json);
    const response = await axios.post("http://localhost:5500/pet", { pet });
    // console.log(newPet);
    // console.log(response);
  };

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
            type="text"
            onChange={updateNewPet}
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
