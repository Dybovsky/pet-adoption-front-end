import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PetsList from "../components/MyPets/PetsList";
import ToAdvancedSearchBtn from "../components/Search/ToAdvancedSearchBtn";
import { getPets, getPetsByType } from "../lib/data/pets";

const Search = () => {
  const [pets, setPets] = useState([]);
  const [searchedAdvPets, setSearchedAdvPets] = useState(null);

  useEffect(() => {
    refreshPets();
  }, []);

  const refreshPets = () => {
    getPets().then((pets) => {
      setPets(pets.pets);
    });
  };

  const [searchField, setSearchField] = useState("");
  // const [searchRes, setSearchRes] = useState(null);

  const handleInput = (e) => {
    setSearchField(e.target.value);
  };
  function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str.type)) {
        result.push(str.type);
      }
    }

    return result;
  }
  const filteredPets = pets.filter((pet) => {
    return pet.type.toLowerCase().includes(searchField.toLowerCase());
  });

  const itemClickHandler = (e) => {
    setSearchField(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = useState(true);

  // const makeSearch = async (query) => {
  //   const result = await getPetsByType(query);
  //   setSearchRes(result);
  // };

  const onAdvSearch = (searchedPets) => {
    setSearchedAdvPets(searchedPets);
  };

  return (
    <div className="search-back">
      <form>
        <label htmlFor="search">
          <input
            value={searchField}
            type="search"
            onChange={handleInput}
            onClick={inputClickHandler}
            placeholder=" Enter type"
          />
          <ul className="autocomplete">
            {searchField && isOpen
              ? unique(filteredPets).map((pet, index) => {
                  return (
                    <li
                      className="autocomplete_item"
                      onClick={itemClickHandler}
                    >
                      {pet}
                    </li>
                  );
                })
              : null}
          </ul>
        </label>
      </form>
      {/* <button className="btn-primary" onClick={() => makeSearch(searchField)}>
        Search
      </button> */}
      <ToAdvancedSearchBtn onAdvSearch={onAdvSearch} />
      {!searchedAdvPets ? (
        <PetsList pets={filteredPets} refreshPets={refreshPets} />
      ) : (
        <PetsList pets={searchedAdvPets} refreshPets={refreshPets} />
      )}
      {/* {!searchRes ? (
        <PetsList pets={pets} refreshPets={refreshPets} />
      ) : (
        <PetsList pets={searchRes} refreshPets={refreshPets} />
      )} */}
    </div>
  );
};

export default Search;
