import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../component/AuthContext';
import Glacier from '../assets/glacier-01.png';
import { InputText } from '../component/input';
import { Button } from '../component/Button';
import Logo from '../assets/logo_Luniris.svg';

const Login = () => {
  const { user, login, logout } = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
   login(username, password)
  }, [user, navigate, username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('請填寫使用者名稱和密碼');
      return;
    }
    if (user === 'admin') {
      navigate('/admin-dashboard');
    } else if (user === 'user') {
      navigate('/user-dashboard');
    } else {
      setError('帳號或密碼錯誤');
    }
  }
  const containerRef = useRef(null);
  const [isCentered, setIsCentered] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const screenHeight = window.innerHeight;

        // 當螢幕高度小於 container 高度時切換 class
        setIsCentered(screenHeight >= containerHeight);
      }
    };

    // 初始化檢查
    handleResize();

    // 監聽視窗大小變化
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`h-screen flex justify-center ${isCentered ? 'items-center' : 'items-start'} bg-light overflow-auto`}>    
      <div id='container'  ref={containerRef} className='w-full h-full flex justify-center items-center bg-white p-3 md:flex-col lg:flex-row sm:w-auto sm:h-auto sm:rounded-[40px]'>
        {/* lg picture */}
        <div className="hidden lg:block relative">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }} width="0" height="0">
            <defs>
              <clipPath id="clip-shape">
                <path d="m348.62,600H30.59c-16.89,0-30.59-13.7-30.59-30.59V30.59C0,1  3.7,13.7,0,30.59,0h400c18.73,0,33.06,16.68,30.24,35.19l-81.98,538.82c-2.27,14.95-15.12,25.99-30.24,25.99Z"/>
              </clipPath>
            </defs>
          </svg>
          <div
          className='h-[600px] w-[465px]'
            style={{
              clipPath: 'url(#clip-shape)',
            }} >
            <img 
              src={Glacier} 
              alt="Glacier" 
              className="h-full object-cover" 
            />
            
          </div>
        </div>
        {/* md picture */}
        <img 
          src={Glacier} 
          alt="Glacier" 
          className="w-[500px] h-60 rounded-[32px] object-cover hidden md:block lg:hidden"
        />

        <div className="w-full flex flex-col justify-center items-center px-16 my-10 lg:my-0">
          <img src={Logo} alt='Logo' className='h-10 mb-10'/>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">登入</h2>
          <form onSubmit={handleSubmit} className='w-50 sm:w-72'>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">使用者名稱</label>
              <InputText type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600">密碼</label>
              <InputText 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button type="submit">
              登入
            </Button>
            </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
