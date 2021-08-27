import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api';

function App () {

    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId))
    }
    
   const handleToggleBookmark = (id) => {
    const newUsers = [...users]
    const index = newUsers.findIndex(item => item._id === id)
    newUsers[index].status = !newUsers[index].status
    setUsers(newUsers)
}
       return ( 
     <div>
        <SearchStatus
        length = {users.length}
       
        />
        <Users
        onDelete={handleDelete}
        onToggle ={handleToggleBookmark}
        users = {users}
       
        />
    </div>);
}
 
export default App;