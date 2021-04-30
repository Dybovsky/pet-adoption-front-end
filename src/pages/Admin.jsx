import ToDashboardBtn from "../components/admin/ToDashboardBtn";
import AddPetBtn from "../components/admin/AddPetBtn";
import { useEffect, useState } from "react";
import { getUsers } from "../lib/data/apiUsers";
import { getPets } from "../lib/data/pets";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);

  const refreshPets = () => {
    getPets().then((pets) => {
      setPets(pets.pets);
    });
    console.log("refreshes in Admin");
  };

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
    refreshPets();
  }, []);
  return (
    <div>
      <AddPetBtn />
      <ToDashboardBtn users={users} pets={pets} refreshPets={refreshPets} />
    </div>
  );
};

export default Admin;
