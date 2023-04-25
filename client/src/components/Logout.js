import React from 'react';

function Logout() {
  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'POST',
      credentials: 'include', // include cookies in the request
    })
      .then(() => {
        // If the logout request is successful, redirect the user to the login page
        window.location.href = '/login';
      })
      .catch(error => console.error('Error logging out:', error));
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
