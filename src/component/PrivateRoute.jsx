import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ role, children }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/" replace />; // 沒有登入時，重定向到登入頁面
  }


  return children; // 角色匹配時，顯示對應的頁面
};

export default PrivateRoute;
