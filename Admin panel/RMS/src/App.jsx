import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/Approutes';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </BrowserRouter>
  );
}