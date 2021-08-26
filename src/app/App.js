import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api/index';

function App () {

    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId))
    }
   
       return ( 
     <div>
        <SearchStatus
        length = {users.length}
        
        />
        <Users
        onDelete={handleDelete}
        users={users}
        
        />
    </div>);
}
 
export default App;