import { useState } from "react";
import { Link } from "react-router-dom";
import PetsList from "../components/MyPets/PetsList";
import ToAdvancedSearchBtn from "../components/Search/ToAdvancedSearchBtn";

const Search = ({ pets }) => {
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
      <PetsList pets={pets} />
    </div>
  );
};

export default Search;
