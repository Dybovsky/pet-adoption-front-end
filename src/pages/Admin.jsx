import ToDashboardBtn from "../components/admin/ToDashboardBtn";
import AddPetBtn from "../components/admin/AddPetBtn";
import { useEffect, useState, useReducer } from "react";
import { getUsers } from "../lib/data/apiUsers";
import { getPets } from "../lib/data/pets";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);

  // const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const refreshPets = async () => {
    await getPets().then((pets) => {
      setPets(pets.pets);
    });
    // forceUpdate();
  };

  const refreshUsers = () => {
    getUsers().then((users) => {
      setUsers(users);
    });
  };

  useEffect(() => {
    refreshUsers();
    (async () => await refreshPets())();
  }, []);
  return (
    <div>
      <AddPetBtn />
      {users && (
        <ToDashboardBtn
          users={users}
          pets={pets}
          refreshPets={refreshPets}
          refreshUsers={refreshUsers}
        />
      )}
    </div>
  );
};

export default Admin;
