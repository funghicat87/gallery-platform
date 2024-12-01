import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../component/admin/AdminHeader'
import AccountManagement from './admin/AccountManagement';
import OverviewPattern from './admin/OverviewPattern';
import PatternUpload from './admin/PatternUpload';

const AdminDashboard = () => {
  return (
    <div className='bg-light flex flex-col h-screen'>
      <Header />
      <div className='box-border pt-24 mx-10 flex-1 h-[calc(100vh-96px-24px)] overflow-auto'>
        <Routes>
          <Route index element={<OverviewPattern />} />
          <Route path="AccountManagement" element={<AccountManagement />} />
          <Route path="OverviewPattern" element={<OverviewPattern />} />
          <Route path="PatternUpload" element={<PatternUpload />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard
