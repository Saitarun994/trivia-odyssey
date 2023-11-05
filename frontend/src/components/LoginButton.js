import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [location, setLocation] = useState('');
    const disploc ="";
    useEffect(() => {
      // Fetching username if the user is authenticated
     
        
        // Simulating the retrieval of location (using geolocation API)
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) =>{
              setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
              disploc = await fetch("https://nominatim.openstreetmap.org/resvers?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&format=json").then((res)=> {
              
              return(res.json())

            })
            console.log(disploc)
            },
            (error) => {
              setLocation('Location not available');
            }
          );
        } else {
          setLocation('Geolocation is not supported by your browser');
        }
      
    }, [isAuthenticated]);

    return (
        !isAuthenticated && (
            <div className="bg-blue-500 p-4 text-white flex items-center justify-between">
      <div>
      <p>Location: {disploc}</p>
        <img src="google-quiz.svg" alt="Login" className="h-6 w-6 mr-2" />
      </div>
      <h1 className="text-xl font-bold">Trivia Odyssey</h1>
      <button onClick={loginWithRedirect} className="bg-white text-blue-500 py-2 px-4 rounded">Sign In</button>
    </div>
        )
    )
}

export default LoginButton
