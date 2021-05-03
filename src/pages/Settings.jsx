import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { getUserByEmail } from "../lib/data/apiUsers";

const Settings = () => {
  const authUser = useContext(AuthContext);

  const [updatedUser, setUpdatedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const saveSettings = (e) => {
    e.preventDefault();
    authUser.update(updatedUser);
  };

  const updateUser = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("auth11", authUser);
    getUserByEmail(authUser.authUser.email).then((user) =>
      setUpdatedUser(user)
    );
  }, []);

  return (
    <div className="settings back-linear">
      <form onSubmit={saveSettings}>
        <h3>Set your profile</h3>
        <label className="form-row">
          <span>First name:</span>
          <input
            value={updatedUser.firstName}
            name="firstName"
            type="text"
            onChange={updateUser}
          />
        </label>
        <label className="form-row">
          <span>Last name:</span>
          <input
            value={updatedUser.lastName}
            name="lastName"
            type="text"
            onChange={updateUser}
          />
        </label>
        <label className="form-row">
          <span>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <input
            value={updatedUser.email}
            name="email"
            type="email"
            onChange={updateUser}
          />
        </label>
        <label className="form-row">
          <span>Phone: &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <input
            value={updatedUser.phone}
            name="phone"
            type="tel"
            onChange={updateUser}
          />
        </label>
        <label className="form-row">
          <span>Password:</span>
          <input
            value={updatedUser.password}
            name="password"
            type="password"
            onChange={updateUser}
          />
        </label>
        <button className="btn-primary">Save</button>
      </form>
    </div>
  );
};

export default Settings;
