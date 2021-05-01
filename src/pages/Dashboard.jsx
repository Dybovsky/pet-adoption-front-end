// import { getUsers } from "../lib/data/apiUsers";
// import { useEffect, useState } from "react";
import UsersList from "../components/admin/UsersList";
import PetsList from "../components/MyPets/PetsList";
// import { getPets } from "../lib/data/pets";

const Dashboard = ({ users, pets, refreshPets, refreshUsers }) => {
  // const [users, setUsers] = useState([]);
  // const [pets, setPets] = useState([]);

  // useEffect(() => {
  //   getUsers().then((users) => {
  //     setUsers(users);
  //   });
  //   getPets().then((pets) => {
  //     setPets(pets.pets);
  //   });
  // }, []);

  return (
    <div>
      <h3>Users</h3>
      <UsersList users={users} refreshUsers={refreshUsers} />
      <h3>Pets</h3>
      <PetsList pets={pets} refreshPets={refreshPets} />
    </div>
  );
};

export default Dashboard;
