import UserItem from "./UserItem";

const UserList = ({ users, refreshUsers }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <UserItem key={user.id} user={user} refreshUsers={refreshUsers} />
      ))}
    </div>
  );
};

export default UserList;
