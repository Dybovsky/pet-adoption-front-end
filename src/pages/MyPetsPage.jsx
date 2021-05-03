import { useState, useEffect, useContext } from "react";
import PetsList from "../components/MyPets/PetsList";
import Toggle from "../components/MyPets/Toggle";
import { getPetsByUserId } from "../lib/data/pets";
import { AuthContext } from "../components/AuthContext";
import localforage from "localforage";

const MyPetsPage = () => {
  const [saved, setSaved] = useState();
  //const [isChecked, setIsChecked] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [myPets, setMyPets] = useState(null);

  // useContext(AuthContext).authUser.then((user) => {
  //   let token = user.token;
  // });
  // const authUser = await localforage.getItem("authUser");

  async function getAuthUser() {
    try {
      const user = await localforage.getItem("authUser");
      setAuthUser(user);
      return user;
    } catch (err) {
      console.error(err);
    }
  }

  // const token = authUser.token;

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

  function refreshPets(token) {
    getPetsByUserId(token).then((pets) => {
      setMyPets(pets);
    });
  }
  useEffect(() => {
    // getPetsByUserId(token).then((pets) => {
    //   setMyPets(pets);
    // });
    getAuthUser().then((user) => {
      refreshPets(user.token);
    });
  }, []);

  //console.log(myPets);
  // console.log(token);
  return (
    <div>
      {/* <Toggle onToggle={onToggle} /> */}
      {/* {!myPets && <h2>You dont have any fat cats</h2>} */}
      {myPets ? (
        <PetsList pets={myPets} refreshPets={refreshPets} />
      ) : (
        <h2>You dont have any fat cats</h2>
      )}
      {myPets && myPets.length < 1 && <h2>You dont have any fat cats</h2>}
      {/* {saved && <PetsList myPets={saved} />}  */}
    </div>
  );
};

export default MyPetsPage;
