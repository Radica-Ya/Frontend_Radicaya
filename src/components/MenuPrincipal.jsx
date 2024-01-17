// MenuPrincipal.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../autentication/AuthContext';
import '../css/index.css';
import { toast } from "react-toastify";

const MenuPrincipal = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const redireccion = useNavigate();

  const handleLogout = () => {
    logout();

    if (logout) {
      redireccion("/")
      toast.success('Sesion cerrada correctamente.');
    }else{
      toast.danger('No se pudo cerrar la sesion.');
    }
  };


  return (
    <div className="container2">
      <div className="titulo">
        <h1>Radicaya</h1>
        <h2>Hola: {user?.nombre}</h2>
      </div>
      <div className="menu-container">
        
          <ul>
            <li>
              <Link to="/formulario">Radicar Documento</Link>
            </li>
            <li>
              <Link to="/verificar-estado">Verificar Estado</Link>
            </li>
            <li>
              <Link to="/editar-documento">Editar Documento</Link>
            </li>
            <li>
              <Link to="/eliminar-documento">Eliminar Documento</Link>
            </li>
            <li>
              <Link to="/notificaciones">Notificaciones</Link>
            </li>
            <li>
              <Link to="/user">Usuarios</Link>
            </li>
          </ul>
      </div>
      <div className="cerrar-sesion">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default MenuPrincipal;
