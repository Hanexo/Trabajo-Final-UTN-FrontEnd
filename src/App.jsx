import React from 'react';
import { Routes, Route } from 'react-router';

// ── 1. IMPORTACIÓN DEL CONTEXTO GLOBAl ──
import ContactsContextProvider from './ContactsContext/ContactsContext';

// ── 2. IMPORTACIÓN DE PANTALLAS PRINCIPALES (SCREENS) ──
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import Home from './Screens/HomeScreen/HomeScreen';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen';

// ── 3. IMPORTACIÓN DE COMPONENTES ──
// Aquí usamos las rutas corregidas que vimos en tus capturas
import ProfileScreen from './Components/ProfileScreen/ProfileScreen';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';


function App() {
  return (
    // Envolvemos toda la app en el Provider para que los contactos estén disponibles en cualquier parte
    <ContactsContextProvider>

      <Routes>
        {/* Ruta inicial: Pantalla de Login */}
        <Route path="/" element={<LoadingScreen />} />
        <Route path='Login' element={<LoginScreen />} />
        {/* Rutas del Layout Principal (Home) */}
        {/* Nota: En tu Home.jsx debes tener un <Outlet /> para que se vean las rutas hijas */}
        <Route path="/home" element={<Home />}>

          {/* Índice: Pantalla de bienvenida por defecto al entrar a /home */}
          <Route index element={<WelcomeScreen />} />

          {/* Rutas dinámicas: El :id cambia según el contacto seleccionado */}
          <Route path="chat/:id" element={<ContactScreen />} />
          <Route path="profile/:id" element={<ProfileScreen />} />
        </Route>

        {/* Ruta de rescate: Cualquier URL inventada o mal escrita mostrará el Error 404 */}
        <Route path="*" element={<ErrorNotFoundScreen />} />
      </Routes>

    </ContactsContextProvider>
  );
}

export default App;