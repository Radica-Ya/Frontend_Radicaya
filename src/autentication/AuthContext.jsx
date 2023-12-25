import { createContext, useContext, useState } from 'react';
import { loginUsers } from '../lib/Api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Lógica para autenticar al usuario
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
