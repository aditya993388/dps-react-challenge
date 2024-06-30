import React from 'react';
import { User } from '../Interface/type';

interface UserListItemProps {
  user: User;
}

function UserListItem({ user }: UserListItemProps) {
  return (
    <li className={user.isOldest ? 'oldest' : ''}>
      <div className="user-info">
        <div className="info-group">
          <div>{user.firstName} {user.lastName}</div>
        </div>
        <div className="info-group">
          <div>{user.address.city}</div>
        </div>
        <div className="info-group">
          <div>{new Date(user.birthDate).toLocaleDateString()}</div>
        </div>
      </div>
    </li>
  );
}

export default UserListItem;
