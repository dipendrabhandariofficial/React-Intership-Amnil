import { createContext, useContext, useState } from 'react';
import React from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Load user from localStorage if exists
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user; // true if user exists

  const login = (email, password) => {
    const userData = { email, password, name: 'Dipendra Bhandari', role: 'Manager' };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // persist in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // remove from localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
