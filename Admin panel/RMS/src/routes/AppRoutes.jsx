import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Reservations from '../pages/Reservations';
import MenuManagement from '../pages/MenuManagement';
import Inventory from '../pages/Inventory';
import Staff from '../pages/Staff';
import Customers from '../pages/Customers';
import Reports from '../pages/Reports';
import Analytics from '../pages/Analytics';
import Settings from '../pages/Settings';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes with Layout */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menu" element={<MenuManagement />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Default redirect */}
      {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
