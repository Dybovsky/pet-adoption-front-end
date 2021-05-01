import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { deleteUser } from "../../lib/data/apiUsers";

const UserItem = ({ user, refreshUsers }) => {
  const token = useContext(AuthContext).authUser.token;

  return (
    <div className="user-card">
      <div>User id: {user.id}</div>
      <div>User first name: {user.firstName}</div>
      <div>User last name: {user.lastName}</div>
      <div>User email: {user.email}</div>
      <div>User pone: {user.phone}</div>
      <div>User date created: {user.dateCreated}</div>
      <button
        className="btn-primary"
        onClick={() => {
          deleteUser(user.id, token);
          refreshUsers();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default UserItem;
