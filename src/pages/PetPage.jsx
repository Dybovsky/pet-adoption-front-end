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
  //   let cat = await getPetById(petId, token);
  // console.log(cat);
  //

  useEffect(() => {
    getPetById(petId, token).then((resp) => {
      setEditedPet(resp.data.response[0]);
      console.log("pet edi", resp.data.response[0]);
    });
  }, [petId, token]);

  // if (!pet) {
  //   return <div>no pet</div>;
  // }
  //   const authUser = useContext(AuthContext).authUser;
  //   const token = authUser.token;

  const handleSubmit = (e) => {
    e.preventDefault();
    editPet(petId, editedPet, token);
    // addPet(newPet, token);
    // setNewPet({
    //   type: "",
    //   breed: "",
    //   name: "",
    //   status: "",
    //   height: 0,
    //   weight: 0,
    //   picture: null,
    //   color: "",
    //   bio: "",
    //   allergy: "",
    //   diet: "",
    // });
    // setPetImage(, );
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
          <input
            value={editedPet.picture}
            name="picture"
            type="file"
            onChange={updateEditedPet}
            //onChange={(e) => setPic(e.target.files[0])}
          />
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
        <button>Edit</button>
      </form>
      {/* <div>
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
      <button onClick={editPet()}>Edit pet</button> */}
    </div>
  );
};

export default PetPage;
