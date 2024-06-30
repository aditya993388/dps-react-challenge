import { useState, useEffect } from 'react';
import { User } from '../Interface/type';

const UserFilter = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]); 

    useEffect(() => {
        fetch('https://dummyjson.com/users')
          .then(response => response.json())
          .then(data => {
            setUsers(data.users);
            setFilteredUsers(data.users);
          });
      }, []);

      return {
        users,
        filteredUsers};


    };
    export default UserFilter;