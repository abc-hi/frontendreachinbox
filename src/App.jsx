
import React, { useState } from 'react';
import UserRegister from './components/userRegister.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import OneboxView from './components/OneboxView.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import OpenBoxLandingPage from './components/OpenBoxLandingPage.jsx';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <GoogleOAuthProvider clientId="65137942191-qdsgqfjhtr81nai5da6p8okn96qr7jtf.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/oneboxView" element={<OneboxView token={token} />} />
          <Route path="/openboxlandingpage" element={<OpenBoxLandingPage />} />

        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;