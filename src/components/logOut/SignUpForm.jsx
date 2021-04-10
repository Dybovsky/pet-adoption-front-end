import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext'


const SignUpForm = (props) => {
    const user = useContext(AuthContext)
    const [ signUpUser, setSignUpUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        passwordCheck: '',

    }) 

    const [ logInUser, setLogInUser] = useState({
        email: '',
        password: '',
    }) 

    const submitSignUp = (e) => {
        e.preventDefault();
        //
    }
    
    const submitLogIn = e => {
        e.preventDefault();
        user.login(logInUser)

        //props.onLogIn(logInUser)
        //
    }

    const updateSignUp = e => {
        setSignUpUser({
            ...signUpUser,
            [e.target.name]: e.target.value
        });
    }

    const updateLogIn = e => {
        setLogInUser({
            ...logInUser,
            [e.target.name]: e.target.value
        });
    }

    return(
    <div>
        <div className='SignUp'>
            <h3>SignUp</h3>
            <form onSubmit={submitSignUp}>
                <label>
                    First name: 
                    <input
                        value={signUpUser.firstName}
                        name="firstName"
                        type="text"
                        onChange={updateSignUp}
                    />
                </label>
                <label>
                    Last name: 
                    <input
                        value={signUpUser.lastName}
                        name="lastName"
                        type="text"
                        onChange={updateSignUp}
                    />
                </label>
                <label>
                    Email: 
                    <input
                        value={signUpUser.email}
                        name="email"
                        type="email"
                        onChange={updateSignUp}
                    />
                </label>
                <label>
                    Phone: 
                    <input
                        value={signUpUser.phone}
                        name="phone"
                        type="tel"
                        onChange={updateSignUp}
                    />
                </label>
                <label>
                    Password: 
                    <input
                        value={signUpUser.password}
                        name="password"
                        type="password"
                        onChange={updateSignUp}
                    />
                </label>
                <label>
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
        <div className='LogIn'>
        <h3>LogIn</h3>
            <form onSubmit={submitLogIn}>
                <label>
                    Email:
                    <input
                        value={logInUser.email}
                        name="email"
                        type="email"
                        onChange={updateLogIn}
                    />
                </label>
                <label>
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
    )
}

export default SignUpForm;