import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext'
import HamburgerMenu from '../HamburgerMenu';
import Logo from '../../assets/logo_Luniris.svg';


const AdminHeader = () => {
  const NavLink = ({ to, children }) => {
    return (
      <div
        className={`relative hover:text-main after:content-[""] after:block after:w-full after:h-1 after:bg-main after:absolute after:-bottom-1 after:left-0 ${location.pathname === '/admin-dashboard/' + to ? 'text-main after:scale-x-100' : 'after:scale-x-0 after:origin-left after:duration-200 hover:after:scale-x-100'}`}
      >
        <Link 
        to={to} 
        className=" transition duration-200">
          {children}
        </Link>
      </div>
    );
  };
  const { logout } = useContext(AuthContext)
  const location = useLocation()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  };

  useEffect(() => {
    setIsNavOpen(false)
  }, [location.pathname]);

  return (
  <div className='w-full py-6 px-4 sm:px-10 fixd z-50 flex items-center justify-center'>
    <nav className="w-full bg-white relative rounded-full py-4 px-16 flex flex-col md:flex-row items-center justify-between">
      <img src={Logo} alt="Logo" className='h-8 hidden md:block'/>
      {/* md Nav */}
      <div className="hidden md:flex gap-12">
        <NavLink to="OverviewPattern">圖紋總覽</NavLink> 
        <NavLink to="PatternUpload">圖紋上傳</NavLink>
        <NavLink to="AccountManagement">帳號管理</NavLink>
      </div>

      {/* sm Nav */}
      <div className='flex justify-between w-full md:hidden'>
        <img src={Logo} alt="Logo" className='h-8'/>
        <div onClick={toggleNav}>
          {isNavOpen ? <HamburgerMenu isOpen/> : <HamburgerMenu/>}
        </div>
      </div>
      <div  className='flex flex-col justify-end md:hidden '>
          <div className={`flex overflow-hidden transition-all duration-300 ease-in-out ${isNavOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className={`m-4 gap-8 flex flex-col items-center justify-center md:hidden`}>
              <NavLink to="OverviewPattern">圖紋總覽</NavLink>
              <NavLink to="PatternUpload">圖紋上傳</NavLink>
              <NavLink to="AccountManagement">帳號管理</NavLink>
              <button  
                onClick={logout}
                className="hover:text-main transition duration-200">
                登出
              </button>
            </div>
          </div>
        </div>

      <button  
        onClick={logout}
        className="hidden md:block hover:text-main transition duration-200">
        登出
      </button>
    </nav>
  </div>
  );
};

export default AdminHeader;
