import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

const HeaderLogin = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  useEffect(() => {
    // Simulating the retrieval of username (replace this with your actual method of getting the username)
    // For demonstration purposes, it's set after 2 seconds using setTimeout
    const fetchUsername = () => {
      // Simulating a delay (2 seconds) to get the username
      setTimeout(() => {
        // Replace this with your actual method of retrieving the username (e.g., fetching from backend, local storage, etc.)
        const fakeUsername = "JohnDoe"; // Replace this with the actual username
        setUsername(fakeUsername);
      }, 2000);
    };

    // Simulating the retrieval of location (using geolocation API)
    const fetchLocation = () => {
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
    };

    fetchUsername();
    fetchLocation();
  }, []);

  return (
    !isAuthenticated && (
    <LoginButton />
    )
  );
};

export default HeaderLogin;