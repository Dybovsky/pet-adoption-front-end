import { useEffect, useState, useContext } from "react";

import PetsList from "../components/MyPets/PetsList";
import ToAdvancedSearchBtn from "../components/Search/ToAdvancedSearchBtn";
import { getAllPets, getPets } from "../lib/data/pets";
import { AuthContext } from "../components/AuthContext";

const Search = () => {
  const authUser = useContext(AuthContext);

  const [pets, setPets] = useState([]);
  const [searchedAdvPets, setSearchedAdvPets] = useState(null);

  useEffect(() => {
    refreshPets();
  }, [authUser.authUser]);

  const refreshPets = () => {
    if (authUser.authUser) {
      getAllPets(authUser.authUser.token).then((pets) => {
        setPets(pets.data.pets);
      });
    } else {
      getPets().then((pets) => {
        setPets(pets.pets);
      });
    }
  };

  const [searchField, setSearchField] = useState("");

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

  const onAdvSearch = (searchedPets) => {
    setSearchedAdvPets(searchedPets);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-back">
      <form onSubmit={handleSubmit}>
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

      <ToAdvancedSearchBtn onAdvSearch={onAdvSearch} />
      {!searchedAdvPets ? (
        <PetsList pets={filteredPets} refreshPets={refreshPets} />
      ) : (
        <PetsList pets={searchedAdvPets} refreshPets={refreshPets} />
      )}
    </div>
  );
};

export default Search;
