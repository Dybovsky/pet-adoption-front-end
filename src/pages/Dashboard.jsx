// import { getUsers } from "../lib/data/apiUsers";
// import { useEffect, useState } from "react";
import UsersList from "../components/admin/UsersList";
import PetsList from "../components/MyPets/PetsList";
// import { getPets } from "../lib/data/pets";

const Dashboard = ({ users, pets, refreshPets }) => {
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
      Users
      <UsersList users={users} />
      Pets
      <PetsList pets={pets} refreshPets={refreshPets} />
    </div>
  );
};

export default Dashboard;
