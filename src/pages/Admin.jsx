import ToDashboardBtn from "../components/admin/ToDashboardBtn";
import AddPetBtn from "../components/admin/AddPetBtn";

const Admin = ({ users, pets }) => {
  return (
    <div>
      <AddPetBtn />
      <ToDashboardBtn users={users} pets={pets} />
    </div>
  );
};

export default Admin;
