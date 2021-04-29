import ToDashboardBtn from "../components/admin/ToDashboardBtn";
import AddPetBtn from "../components/admin/AddPetBtn";
import { useEffect, useState } from "react";
import { getUsers } from "../lib/data/apiUsers";
import { getPets } from "../lib/data/pets";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
    getPets().then((pets) => {
      setPets(pets.pets);
    });
  }, []);
  return (
    <div>
      <AddPetBtn />
      <ToDashboardBtn users={users} pets={pets} />
    </div>
  );
};

export default Admin;
