import React from 'react';





function UserList() {
  return (
    <ul className="user-list">
      { (
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

    </ul>
  );
}

export default UserList;
