import ToDashboardBtn from "../components/admin/ToDashboardBtn";
import AddPetBtn from "../components/admin/AddPetBtn";
import { useEffect, useState, useContext } from "react";
import { getUsers } from "../lib/data/apiUsers";
import { getAllPets } from "../lib/data/pets";
import { AuthContext } from "../components/AuthContext";

const Admin = () => {
  const authUser = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);

  const refreshPets = async () => {
    await getAllPets(authUser.authUser.token).then((pets) => {
      setPets(pets.data.pets);
    });
  };

  const refreshUsers = () => {
    return getUsers().then((users) => {
      setUsers(users);
    });
  };

  useEffect(() => {
    refreshUsers();
    refreshPets();
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
