import UsersList from "../components/admin/UsersList";
import PetsList from "../components/MyPets/PetsList";

const Dashboard = ({ users, pets, refreshPets, refreshUsers }) => {
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
