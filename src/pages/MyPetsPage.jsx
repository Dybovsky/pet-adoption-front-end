import { useState, useEffect, useContext } from "react";
import PetsList from "../components/MyPets/PetsList";
import Toggle from "../components/MyPets/Toggle";
import { getPetsByUserId, getSavedPets } from "../lib/data/pets";
import { AuthContext } from "../components/AuthContext";
import localforage from "localforage";

const MyPetsPage = () => {
  const [saved, setSaved] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);
  // const [authUser, setAuthUser] = useState(null);
  const [myPets, setMyPets] = useState(null);
  const [savedPets, setSavedPets] = useState([]);
  // useContext(AuthContext).authUser.then((user) => {
  //   let token = user.token;
  // });
  // const authUser = await localforage.getItem("authUser");

  async function getAuthUser() {
    try {
      const user = await localforage.getItem("authUser");
      // setAuthUser(user);
      return user;
    } catch (err) {
      console.error(err);
    }
  }
  console.log("sae", saved);
  // const token = authUser.token;

  const onToggle = () => {
    setSaved(!saved);
    //await loadSavedPets();
  };
  //let savedPets = allPets.filter((pet) => pet.saved);
  const loadSavedPets = async () => {
    // if (saved) {
    const user = await getAuthUser();
    const pets = await getSavedPets(user.id);
    await setSavedPets(pets.data);
    // }
  };

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
    loadSavedPets();
  }

  useEffect(() => {
    // getPetsByUserId(token).then((pets) => {
    //   setMyPets(pets);
    // });
    loadSavedPets();

    getAuthUser().then((user) => {
      refreshPets(user.token);
    });
  }, []);

  //console.log(myPets);
  // console.log(token);
  return (
    <>
      <Toggle onToggle={onToggle} />
      {!saved ? (
        <div>
          {/* {!myPets && <h2>You dont have any fat cats</h2>} */}
          {myPets ? (
            <PetsList pets={myPets} refreshPets={refreshPets} />
          ) : (
            <h2>You don't have any fat cats</h2>
          )}
          {myPets && myPets.length < 1 && <h2>You don't have any fat cats</h2>}
          {/* {saved && <PetsList myPets={saved} />}  */}
        </div>
      ) : savedPets.length !== 0 ? (
        <PetsList pets={savedPets} refreshPets={refreshPets} />
      ) : (
        <h2>You don't have any saved fat cats</h2>
      )}
    </>
  );
};

export default MyPetsPage;
