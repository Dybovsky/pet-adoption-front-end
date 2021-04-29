import { useState, useEffect, useContext } from "react";
import PetsList from "../components/MyPets/PetsList";
import Toggle from "../components/MyPets/Toggle";
import { getPetsByUserId } from "../lib/data/pets";
import { AuthContext } from "../components/AuthContext";

const MyPetsPage = () => {
  const [saved, setSaved] = useState();
  //const [isChecked, setIsChecked] = useState(false);

  const [myPets, setMyPets] = useState(null);

  const authUser = useContext(AuthContext).authUser;

  const token = authUser.token;

  // const onToggle = (val) => {
  //   setIsChecked(val);
  // };
  //let savedPets = allPets.filter((pet) => pet.saved);

  // useEffect(() => {
  //   isChecked ? setSaved(savedPets) : setSaved();
  //   const pets = getPets();
  //   setMyPets(pets);
  //   console.log(myPets);
  // }, [isChecked, myPets]);
  useEffect(() => {
    getPetsByUserId(token).then((pets) => {
      console.log("pets", pets);
      setMyPets(pets);
    });
  }, [token]);
  //console.log(myPets);
  console.log(token);
  return (
    <div>
      {/* <Toggle onToggle={onToggle} /> */}
      {/* {!myPets && <h2>You dont have any fat cats</h2>} */}
      {myPets ? (
        <PetsList pets={myPets} />
      ) : (
        <h2>You dont have any fat cats</h2>
      )}
      {myPets && myPets.length < 1 && <h2>You dont have any fat cats</h2>}
      {/* {saved && <PetsList myPets={saved} />}  */}
    </div>
  );
};

export default MyPetsPage;
