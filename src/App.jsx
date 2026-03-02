import React from 'react';
import { Routes, Route } from 'react-router';

import ContactsContextProvider from './ContactsContext/ContactsContext';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import Home from './Screens/HomeScreen/HomeScreen';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import ProfileScreen from './Components/ProfileScreen/ProfileScreen';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import UserProfileScreen from './Screens/UserProfileScreen/UserProfileScreen';

function App() {
  return (
    <ContactsContextProvider>
      <Routes>

        {/* Splash */}
        <Route path="/" element={<LoadingScreen />} />

        {/* Login */}
        <Route path="/login" element={<LoginScreen />} />

        {/* Perfil del usuario (pantalla completa) */}
        <Route path="/profile" element={<UserProfileScreen />} />

        {/* Home con sidebar */}
        <Route path="/home" element={<Home />}>
          <Route index element={<WelcomeScreen />} />
          <Route path="chat/:id" element={<ContactScreen />} />
          <Route path="profile/:id" element={<ProfileScreen />} />
        </Route>

        <Route path="*" element={<ErrorNotFoundScreen />} />

      </Routes>
    </ContactsContextProvider>
  );
}

export default App;
