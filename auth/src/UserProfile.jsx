// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate a delay to fetch user data
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150'
      });
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <div className="user-profile">
      <div className="avatar">
        {user ? (
          <img src={user.avatar} alt="User Avatar" />
        ) : (
          <Skeleton circle={true} height={150} width={150} />
        )}
      </div>
      <div className="details">
        <h2>{user ? user.name : <Skeleton width={200} />}</h2>
        <p>{user ? user.email : <Skeleton width={300} />}</p>
      </div>
    </div>
  );
};

export default UserProfile;
