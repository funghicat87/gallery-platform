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
      <div className='mx-4 sm:mx-10 h-full overflow-auto'>
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
