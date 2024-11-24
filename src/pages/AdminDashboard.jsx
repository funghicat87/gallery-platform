import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Header from '../component/admin/AdminHeader'
import AccountManagement from './admin/AccountManagement';
import OverviewPattern from './admin/OverviewPattern';
import PatternUpload from './admin/PatternUpload';

const AdminDashboard = () => {
  return (
    <div className='bg-light h-full'>
      <Header />
      <div className='pt-24 mx-10'>
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
