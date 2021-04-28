import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { deleteUser } from "../../lib/data/apiUsers";

const UserItem = ({ user }) => {
  const token = useContext(AuthContext).authUser.token;

  return (
    <div>
      <div>User id: {user.id}</div>
      <div>User first name: {user.firstName}</div>
      <div>User last name: {user.lastName}</div>
      <div>User email: {user.email}</div>
      <div>User pone: {user.phone}</div>
      <div>User date created: {user.dateCreated}</div>
      <button onClick={() => deleteUser(user.id, token)}>Delete</button>
    </div>
  );
};

export default UserItem;
