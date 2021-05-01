import { useState, useContext } from "react";
import { addPet, setPetImage } from "../lib/data/pets";
import { AuthContext } from "../components/AuthContext";
import { v4 as uuidv4 } from "uuid";

const AddPet = () => {
  const [pic, setPic] = useState(null);

  const authUser = useContext(AuthContext).authUser;

  const token = authUser.token;
  const [newPet, setNewPet] = useState({
    id: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", pic);
    const id = uuidv4();

    const { picture } = await setPetImage(id, token, fd);

    setNewPet({
      id,
      type: "",
      breed: "",
      name: "",
      status: "",
      height: 0,
      weight: 0,
      picture,
      color: "",
      bio: "",
      allergy: "",
      diet: "",
    });
    newPet.id = id;
    newPet.picture = picture;
    console.log("newPet", newPet);
    await addPet(newPet, token);
    // setNewPet((pet) => ({ ...pet, picture: urlPath }));
    // fd.append("", newPet);
    // let urlPath = "pic";
    // // = await setPetImage(newPet.id, token, fd).picture;
    // setNewPet((pet) => ({ ...pet, picture: urlPath }));
    // console.log("newPet", newPet);
    // //await console.log("url", urlPath);
    // await addPet(newPet, token);
  };

  // const onAdd = async (e) => {
  //   e.preventDefault();
  //   const fd = new FormData();
  //   fd.append("image", image); // picture
  //   for (let data in inputs) { // the rest of the data
  //     fd.append(data, inputs[data]);
  //   }
  //   const result = await axios.post(baseURL + "/pets/addPet", fd);
  //   console.log(await result.data);
  // };

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
    <div className="back-linear">
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
        <label className="form-row">
          Picture:
          <input
            name="picture"
            type="file"
            //onChange={updateNewPet}
            onChange={(e) => setPic(e.target.files[0])}
          />
        </label>
        <button className="btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddPet;
