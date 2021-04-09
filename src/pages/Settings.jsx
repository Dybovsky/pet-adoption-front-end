import { useState } from 'react'

const Settings = () => {

   const [updatedUser, setUpdatedUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
   })

   const saveSettings = (e) => {
       e.preventDefault()

   } 

   const updateUser = e => {
    setUpdatedUser({
        ...updatedUser,
        [e.target.name]: e.target.value
    });
}

    return(
        <div>
            <form onSubmit={saveSettings}>
                Set your profile
                <label>
                    First name: 
                    <input
                        value={updatedUser.firstName}
                        name="firstName"
                        type="text"
                        onChange={updateUser}
                    />
                </label>
                <label>
                    Last name: 
                    <input
                        value={updatedUser.lastName}
                        name="lastName"
                        type="text"
                        onChange={updateUser}
                    />
                </label>
                <label>
                    Email: 
                    <input
                        value={updatedUser.email}
                        name="email"
                        type="email"
                        onChange={updateUser}
                    />
                </label>
                <label>
                    Phone: 
                    <input
                        value={updatedUser.phone}
                        name="phone"
                        type="tel"
                        onChange={updateUser}
                    />
                </label>
                <label>
                    Password: 
                    <input
                        value={updatedUser.password}
                        name="password"
                        type="password"
                        onChange={updateUser}
                    />
                </label>
                <button>Save</button>
            </form>
        </div>
    )
}

export default Settings