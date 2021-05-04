import { useState } from "react";
import { getPetsByAdvSearch } from "../../lib/data/pets";

const AdvancedSearch = ({ onAdvSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    makeAdvSearch(advancedSearch);
  };

  const [searchedPets, setSearchedPets] = useState(null);

  const [advancedSearch, setAdvancedSearch] = useState({
    type: "",
    name: "",
    status: "",
    height: 0,
    weight: 0,
  });

  const updateSearch = (e) => {
    setAdvancedSearch({
      ...advancedSearch,
      [e.target.name]: e.target.value,
    });
  };
  const makeAdvSearch = async (searchObj) => {
    // console.log("search obj", searchObj);
    const result = await getPetsByAdvSearch(searchObj);
    setSearchedPets(result);
    await onAdvSearch(searchedPets);
    //works from sec time
  };

  return (
    <div>
      <h3>Advanced Search</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-row">
          Type:
          <input
            value={advancedSearch.type}
            name="type"
            type="text"
            onChange={updateSearch}
          />
        </label>
        <label className="form-row">
          Name:
          <input
            value={advancedSearch.name}
            name="name"
            type="text"
            onChange={updateSearch}
          />
        </label>
        <label className="form-row">
          Status:
          <input
            value={advancedSearch.status}
            name="status"
            type="text"
            onChange={updateSearch}
          />
        </label>
        <label className="form-row">
          Height:
          <input
            value={advancedSearch.height}
            name="height"
            type="number"
            onChange={updateSearch}
          />
        </label>
        <label className="form-row">
          Weight:
          <input
            value={advancedSearch.weight}
            name="weight"
            type="number"
            onChange={updateSearch}
          />
        </label>
        <button className="btn-primary">Search</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
