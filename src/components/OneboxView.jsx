

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; 
import './Onebox.css';

const OneboxView = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log('Login successful:', response);
    navigate('/openboxlandingpage');
  };

  const handleLoginFailure = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <div className="onebox-container">
      <h1>Sign in with Google</h1>
      <div className="google-signin-container">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </div>
  );
};

export default OneboxView;
