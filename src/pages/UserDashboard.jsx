import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Header from '../component/user/UserHeader'
import UserPage from '../pages/user/UserPage'

const UserDashboard = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<UserPage />} />
      </Routes>
    </div>
  );
};

export default UserDashboard
