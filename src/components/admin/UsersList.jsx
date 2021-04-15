import UserItem from './UserItem'

const UserList = ({users}) => {
    return(
        <div>
            
            {users.map((user) => { 
                return(
                <UserItem
                    key={user.id}
                    user={user}
                />)
            })}
        </div>
    )
}

export default UserList;