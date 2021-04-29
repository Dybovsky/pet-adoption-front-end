import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PetsList from "../components/MyPets/PetsList";
import ToAdvancedSearchBtn from "../components/Search/ToAdvancedSearchBtn";
import { getPets } from "../lib/data/pets";

const Search = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    refreshPets();
  }, []);

  const refreshPets = () => {
    getPets().then((pets) => {
      setPets(pets.pets);
    });
    console.log("refreshes in Search");
  };

  const [searchField, setSearchField] = useState("");

  const handleInput = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">
        <input type="search" onChange={handleInput} />
      </label>
      <button>Search</button>
      <ToAdvancedSearchBtn />
      <PetsList pets={pets} refreshPets={refreshPets} />
    </div>
  );
};

export default Search;
