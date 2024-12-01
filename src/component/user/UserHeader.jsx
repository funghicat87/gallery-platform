import React , { useContext }from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext'


const UserHeader = () => {
  const { logout } = useContext(AuthContext);
  return (
    <nav className="navbar bg-gray-100 py-4 px-6 flex justify-between items-center">
      <div className="flex gap-6">

        <button  
          onClick={logout}
          className="hover:text-red-400 transition duration-200">
          登出
        </button>
      </div>
    </nav>
  );
};

export default UserHeader;
