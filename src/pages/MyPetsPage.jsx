import { useState, useEffect } from "react";
import PetsList from "../components/MyPets/PetsList";
import Toggle from "../components/MyPets/Toggle";
import { getPetsByUserId, getSavedPets } from "../lib/data/pets";

import localforage from "localforage";

const MyPetsPage = () => {
  const [saved, setSaved] = useState(false);

  const [myPets, setMyPets] = useState(null);
  const [savedPets, setSavedPets] = useState([]);

  async function getAuthUser() {
    try {
      const user = await localforage.getItem("authUser");

      return user;
    } catch (err) {
      console.error(err);
    }
  }

  const onToggle = () => {
    setSaved(!saved);
  };

  const loadSavedPets = async () => {
    const user = await getAuthUser();
    const pets = await getSavedPets(user.id);
    await setSavedPets(pets.data);
  };

  function refreshPets(token) {
    getPetsByUserId(token).then((pets) => {
      setMyPets(pets);
    });
    loadSavedPets();
  }

  useEffect(() => {
    loadSavedPets();

    getAuthUser().then((user) => {
      refreshPets(user.token);
    });
  }, []);

  return (
    <>
      <Toggle onToggle={onToggle} />
      {!saved ? (
        <div>
          {myPets ? (
            <PetsList pets={myPets} refreshPets={refreshPets} />
          ) : (
            <h2>You don't have any fat cats</h2>
          )}
          {myPets && myPets.length < 1 && <h2>You don't have any fat cats</h2>}
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
