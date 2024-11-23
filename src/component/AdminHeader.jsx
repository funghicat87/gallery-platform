import React from 'react';
import { Link } from 'react-router-dom';

// 定義單一的 NavLink 元件
const NavLink = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="hover:text-cyan-400 transition duration-200"
    >
      {children}
    </Link>
  );
};

const AdminHeader = () => {
  return (
    <nav className="navbar bg-gray-100 py-4 px-6 flex justify-between items-center">
      <div className="flex gap-6">
        <NavLink to="AdminHome">Home</NavLink>
        <NavLink to="OverviewPattern">圖紋總覽</NavLink>
        <NavLink to="PatternUpload">圖紋上傳</NavLink>
        <NavLink to="AccountManagement">帳號管理</NavLink>
      </div>
    </nav>
  );
};

export default AdminHeader;
