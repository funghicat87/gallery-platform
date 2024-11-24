import React , { useContext }from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext'


const NavLink = ({ to, children }) => {
  return (
    <div
  className={
    location.pathname === '/admin-dashboard/' + to
      ? 'text-main relative after:content-[""] after:block after:w-full after:h-1 after:bg-light after:absolute after:-bottom-2 after:left-0 after:scale-x-100'
      : 'relative after:content-[""] after:block after:w-full after:h-1 after:bg-light after:absolute after:-bottom-2 after:left-0 after:scale-x-0 after:origin-left after:duration-200 hover:after:scale-x-100'
  }
>
      <Link 
      to={to} 
      className="hover:text-main transition duration-200"
      >
        {children}
      </Link>
    </div>
  );
};
console.log(location.pathname)
const AdminHeader = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  return (
  <div className='w-full h-24 fixed z-50 bg-light '>
    <nav className="bg-white relative top-5 mx-10 rounded-full py-4 px-16 flex justify-between">
      <div className="flex gap-12">
        <NavLink to="OverviewPattern" >圖紋總覽</NavLink>
        <NavLink to="PatternUpload" className={location.pathname === '/PatternUpload' ? 'text-main' : ''}>圖紋上傳</NavLink>
        <NavLink to="AccountManagement" className={location.pathname === '/AccountManagement' ? 'text-main' : ''}>帳號管理</NavLink>
      </div>
        <button  
          onClick={logout}
          className="hover:text-main transition duration-200">
          登出
        </button>
    </nav>
  </div>


  );
};

export default AdminHeader;
