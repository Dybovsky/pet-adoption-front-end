import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { createUser, getUserByEmail, logIn } from "../../lib/data/apiUsers";

const SignUpForm = (props) => {
  const user = useContext(AuthContext);
  const [signUpUser, setSignUpUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordCheck: "",
  });

  const [logInUser, setLogInUser] = useState({
    email: "",
    password: "",
  });

  const submitSignUp = async (e) => {
    e.preventDefault();
    let curUser = await getUserByEmail(signUpUser.email);
    // mocUsers.push(signUpUser)
    user.login(curUser);
    //const authUser = JSON.stringify(signUpUser)
    createUser(signUpUser);

    //
  };

  const submitLogIn = async (e) => {
    e.preventDefault();
    try {
      let authUser = await logIn(logInUser);
      let token = authUser.token;
      let curUser = await getUserByEmail(authUser.user.email);
      curUser.token = token;
      user.login(curUser);
    } catch (err) {
      console.error(err);
    }
    //props.onLogIn(logInUser)
    //
  };

  const updateSignUp = (e) => {
    setSignUpUser({
      ...signUpUser,
      [e.target.name]: e.target.value,
    });
  };

  const updateLogIn = (e) => {
    setLogInUser({
      ...logInUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="SignUp">
        <h3>SignUp</h3>
        <form onSubmit={submitSignUp}>
          <label className="form-row">
            First name:
            <input
              value={signUpUser.firstName}
              name="firstName"
              type="text"
              onChange={updateSignUp}
            />
          </label>
          <label className="form-row">
            Last name:
            <input
              value={signUpUser.lastName}
              name="lastName"
              type="text"
              onChange={updateSignUp}
            />
          </label>
          <label className="form-row">
            Email:
            <input
              value={signUpUser.email}
              name="email"
              type="email"
              onChange={updateSignUp}
            />
          </label>
          <label className="form-row">
            Phone:
            <input
              value={signUpUser.phone}
              name="phone"
              type="tel"
              onChange={updateSignUp}
            />
          </label>
          <label className="form-row">
            Password:
            <input
              value={signUpUser.password}
              name="password"
              type="password"
              onChange={updateSignUp}
            />
          </label>
          <label className="form-row">
            Password check:
            <input
              value={signUpUser.passwordCheck}
              name="passwordCheck"
              type="password"
              onChange={updateSignUp}
            />
          </label>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="LogIn">
        <h3>LogIn</h3>
        <form onSubmit={submitLogIn}>
          <label className="form-row">
            Email:
            <input
              value={logInUser.email}
              name="email"
              type="email"
              onChange={updateLogIn}
            />
          </label>
          <label className="form-row">
            Password:
            <input
              value={logInUser.password}
              name="password"
              type="password"
              onChange={updateLogIn}
            />
          </label>
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
