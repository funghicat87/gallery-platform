import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './component/AuthContext';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import PrivateRoute from './component/PrivateRoute';
import { FilterProvider } from './component/SearchBar';

const App = () => {
  return (
    <AuthProvider>
      <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin-dashboard/*"
            element={
              <PrivateRoute role="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-dashboard/*"
            element={
              <PrivateRoute role="user">
                <UserDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      </FilterProvider>
    </AuthProvider>
  );
};

export default App;
