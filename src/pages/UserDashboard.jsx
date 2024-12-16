import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Header from '../component/user/UserHeader'
import UserPage from '../pages/user/UserPage'

const UserDashboard = () => {
  return (
    <div className='bg-light flex flex-col h-screen'>
      <Header />
      <div className='box-border pt-24 mx-4 sm:mx-10 flex-1 h-[calc(100vh-96px-24px)] overflow-auto'>
        <Routes>
          <Route index element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard
