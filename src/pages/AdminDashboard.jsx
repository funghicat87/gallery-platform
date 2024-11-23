import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Header from '../component/AdminHeader'
import AdminHome from './admin/AdminHome';
import AccountManagement from './admin/AccountManagement';
import OverviewPattern from './admin/OverviewPattern';
import PatternUpload from './admin/PatternUpload';

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="AdminHome" element={<AdminHome />} />
        <Route path="AccountManagement" element={<AccountManagement />} />
        <Route path="OverviewPattern" element={<OverviewPattern />} />
        <Route path="PatternUpload" element={<PatternUpload />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard
