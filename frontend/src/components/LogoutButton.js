import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';

const LogoutButton = () => {
    const { logout, user, isAuthenticated } = useAuth0();
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Fetching username if the user is authenticated
    if (isAuthenticated) {
      setUsername(user.nickname);
      // Simulating the retrieval of location (using geolocation API)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
          },
          (error) => {
            setLocation('Location not available');
          }
        );
      } else {
        setLocation('Geolocation is not supported by your browser');
      }
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      <div className="bg-blue-500 p-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <img src={user.picture} alt={user?.name} className="h-6 w-6 mr-2" />
          <div className="inline-block">
            <h2>{username}</h2>
           
            <p>Location: {location.latitude}</p>
          </div>
        </div>
        <button onClick={logout} className="bg-white text-blue-500 py-2 px-4 rounded">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default LogoutButton