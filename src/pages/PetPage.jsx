import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPetById } from "../lib/data/pets";
import { AuthContext } from "../components/AuthContext";

const PetPage = () => {
  const token = useContext(AuthContext).authUser.token;
  const { petId } = useParams();
  let [pet, setPet] = useState(null);
  //   let cat = await getPetById(petId, token);
  //   console.log(cat);

  useEffect(() => {
    getPetById(petId, token).then((resp) => setPet(resp.data.response[0]));
  }, []);

  if (!pet) {
    return <div>no pet</div>;
  }
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
    </div>
  );
};

export default PetPage;
