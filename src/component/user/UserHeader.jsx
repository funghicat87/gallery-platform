import React , { useContext }from 'react';
import { AuthContext } from '../AuthContext'
import Logo from '../../assets/logo_Luniris.svg';

const UserHeader = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className='w-full py-6 px-4 sm:px-10 fixd z-50 flex items-center justify-center'>
      <nav className="w-full bg-white relative rounded-full py-4 px-16 flex justify-between items-center gap-4">
          <img src={Logo} alt="Logo" className='h-8'/>
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
