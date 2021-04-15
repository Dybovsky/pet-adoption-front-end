import { getUsers } from "../lib/apiUsers"
import {useEffect, useState} from 'react';
import UsersList from '../components/admin/UsersList'



const Dashboard = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(users => {
            setUsers(users)
        })
    }, [])

    
    return(
        <div>
            Dashboard
            <UsersList users={users} />
            
        </div>
    )
}

export default Dashboard