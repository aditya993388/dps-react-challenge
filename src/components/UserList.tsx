import React from 'react';
import UserListItem from './UserListItem';
import { User } from '../Interface/type';

interface UserListProps {
  filteredUsers: User[];
}

function UserList({ filteredUsers }: UserListProps) {
  return (
    <ul className="user-list">
      {filteredUsers.length > 0 && (
        <div className="user-list-header">
          <div className="info-group">
            <h3>Name</h3>
          </div>
          <div className="info-group">
            <h3>City</h3>
          </div>
          <div className="info-group">
            <h3>Birth Date</h3>
          </div>
        </div>
      )}

      {filteredUsers.map(user => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
