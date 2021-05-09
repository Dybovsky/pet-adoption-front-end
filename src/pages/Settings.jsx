import { useContext, useEffect, useState } from "react";
import localforage from "localforage";
import { AuthContext } from "../components/AuthContext";
import { getUserByEmail } from "../lib/data/apiUsers";

const Settings = () => {
  const authUser = useContext(AuthContext);
  // let authUser;
  // localforage.getItem("authUser").then((user) => {
  //   authUser = user;
  // });

  useEffect(() => {
    localforage.getItem("authUser").then((authUser) => {
      getUserByEmail(authUser.email).then((user) => setUpdatedUser(user));
    });
  }, []);

  const [updatedUser, setUpdatedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  // console.log("auth", authUser);

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
            placeholder="Enter new password"
          />
        </label>
        {updatedUser.password && <button className="btn-primary">Save</button>}
      </form>
    </div>
  );
};

export default Settings;
