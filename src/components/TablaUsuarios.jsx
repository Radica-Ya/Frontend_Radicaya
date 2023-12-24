import React, { useEffect, useState } from 'react';
import { ObtenerUsuarios } from "../lib/Api";
import { Link } from 'react-router-dom';
import "../css/index.css";



const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const usersData = await ObtenerUsuarios();
                console.log('Respuesta de la API:' , usersData);
                setUsers(usersData);
            } catch (error) {
                console.log("se produjo un error al obtener los usuarios");
                console.error('Error al obtener el los usuarios');
            }
        };

        fetchData();
    }, []);
  return (
    <div>
      <h2>Tabla de Usuarios</h2>
      <table> 
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>{user.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;



/*const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await ObtenerUsuarios();
        setUsers(usersData);
        setLoading(false); // Indicar que los datos se han cargado correctamente
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        setLoading(false); // Indicar que ha ocurrido un error al cargar los datos
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div>
      <h2>Tabla de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>{user.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;*/

