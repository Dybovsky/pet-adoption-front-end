const UserItem = ({ user }) => {
  return (
    <div>
      <div>User id: {user.id}</div>
      <div>User first name: {user.firstName}</div>
      <div>User last name: {user.lastName}</div>
      <div>User email: {user.email}</div>
      <div>User pone: {user.phone}</div>
      <div>User date created: {user.dateCreated}</div>
    </div>
  );
};

export default UserItem;
