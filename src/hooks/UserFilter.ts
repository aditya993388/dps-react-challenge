import { useState, useEffect } from 'react';
import { User } from '../Interface/type';

const UserFilter = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [nameFilter, setNameFilter] = useState<string>('');

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data.users);
                setFilteredUsers(data.users);
            });
    }, []);

    useEffect(() => {
        let filtered = users;

        if (nameFilter) {
            filtered = filtered.filter(user =>
                `${user.firstName} ${user.lastName}`.toLowerCase().includes(nameFilter.toLowerCase())
            );
        }
        setFilteredUsers(filtered);
    }, [nameFilter, users]);

    return {
        users,
        filteredUsers,
        nameFilter,
        setNameFilter,

    };


};
export default UserFilter;