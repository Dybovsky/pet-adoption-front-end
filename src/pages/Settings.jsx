import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";

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

  return (
    <div className="settings back-linear">
      <form onSubmit={saveSettings}>
        <h3>Set your profile</h3>
        <label className="form-row">
          First name:
          <input
            value={updatedUser.firstName}
            name="firstName"
            type="text"
            onChange={updateUser}
          />
        </label>
        <label className="form-row">
          Last name:
          <input
            value={updatedUser.lastName}
            name="lastName"
            type="text"
            onChange={updateUser}
          />
        </label>
        <label className="form-row">
          Email:
          <input
            value={updatedUser.email}
            name="email"
            type="email"
            onChange={updateUser}
          />
        </label>
        <label className="form-row">
          Phone:
          <input
            value={updatedUser.phone}
            name="phone"
            type="tel"
            onChange={updateUser}
          />
        </label>
        <label className="form-row">
          Password:
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
