import React , { useContext }from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext'


const UserHeader = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className='w-full h-24 fixed z-50 bg-light '>
      <nav className="bg-white relative top-5 mx-10 rounded-full py-4 px-16 flex justify-between">
          <button  
            onClick={logout}
            className="hover:text-main transition duration-200">
            登出
          </button>
      </nav>
    </div>
  );
};

export default UserHeader;
