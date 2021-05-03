import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PetsList from "../components/MyPets/PetsList";
import ToAdvancedSearchBtn from "../components/Search/ToAdvancedSearchBtn";
import { getPets, getPetsByType } from "../lib/data/pets";

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
    console.log("pets state", pets);
  };

  const [searchField, setSearchField] = useState("");
  const [searchRes, setSearchRes] = useState(null);

  const handleInput = (e) => {
    setSearchField(e.target.value);
  };

  const makeSearch = async (query) => {
    const result = await getPetsByType(query);
    setSearchRes(result);
    // await console.log(searchRes);
  };

  return (
    <div className="search-back">
      <label htmlFor="search">
        <input type="search" onChange={handleInput} placeholder=" Enter type" />
      </label>
      <button className="btn-primary" onClick={() => makeSearch(searchField)}>
        Search
      </button>
      <ToAdvancedSearchBtn />
      {!searchRes ? (
        <PetsList pets={pets} refreshPets={refreshPets} />
      ) : (
        <PetsList pets={searchRes} refreshPets={refreshPets} />
      )}
    </div>
  );
};

export default Search;
