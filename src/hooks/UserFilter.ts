import { useState, useEffect } from 'react';
import { User } from '../Interface/type';

const useUserFilter = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [nameFilter, setNameFilter] = useState<string>('');
    const [cityFilter, setCityFilter] = useState<string>('');
    const [highlightOldest, setHighlightOldest] = useState<boolean>(false);

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

        if (cityFilter) {
            filtered = filtered.filter(user => user.address.city === cityFilter);
        }

        if (highlightOldest && cityFilter) {
            const usersByCity: { [key: string]: User[] } = {};

            filtered.forEach(user => {
                if (!usersByCity[user.address.city]) {
                    usersByCity[user.address.city] = [];
                }
                usersByCity[user.address.city].push(user);
            });

            Object.keys(usersByCity).forEach(city => {
                const cityUsers = usersByCity[city];
                const oldestUser = cityUsers.reduce((oldest, user) =>
                    new Date(user.birthDate) < new Date(oldest.birthDate) ? user : oldest
                );

                cityUsers.forEach(user => {
                    user.isOldest = user.id === oldestUser.id;
                });
            });

            filtered = Object.values(usersByCity).flat();
        } else {
            filtered.forEach(user => {
                user.isOldest = false;
            });
        }

        setFilteredUsers(filtered);
    }, [nameFilter, cityFilter, users, highlightOldest]);

    const cities = [...new Set(users.map(user => user.address.city))];

    return {
        users,
        filteredUsers,
        nameFilter,
        setNameFilter,
        cityFilter,
        setCityFilter,
        highlightOldest,
        setHighlightOldest,
        cities
    };
};

export default useUserFilter;
