// AdminHome.js
import React from 'react';
import { redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';

function AdminHome() {
  const { isAdmin, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!isAdmin) {
    return <redirect to="/" />;
  }

  return (
    <div>
      <h2>Bienvenido, Administrador</h2>
      <p>Contenido exclusivo para administradores.</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default AdminHome;
