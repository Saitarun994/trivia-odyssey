import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';


const HeaderLogout = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();


  return (
    isAuthenticated && (
    <LogoutButton />
    
    )

  );
};

export default HeaderLogout;