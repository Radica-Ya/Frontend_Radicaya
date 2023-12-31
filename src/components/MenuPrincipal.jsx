// MenuPrincipal.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuth } from '../autentication/AuthContext';
import '../css/index.css';

const MenuPrincipal = () => {
  const { handleSubmit } = useForm();

  const { isAuthenticated, user, logout } = useAuth();

  console.log(user);

  const onSubmit = (data) => {
    // Puedes manejar la lógica del formulario aquí si es necesario
    console.log('Datos del formulario:', data);
  };


  return (
    <div className="container2">
      <div className="titulo">
        <h1>Radicaya</h1>
        <h2>{user.nombre}</h2>
      </div>
      <div className="menu-container">
        <form onSubmit={handleSubmit(onSubmit)}>
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
        </form>
      </div>
      <div className="cerrar-sesion">
        <button type="submit">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default MenuPrincipal;
