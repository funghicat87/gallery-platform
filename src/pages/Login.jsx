import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../component/AuthContext';
import Glacier from '../assets/glacier-01.png';
import { InputText } from '../component/input';

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

  return (
    <div 
     className="h-screen flex justify-center items-center bg-light"
    >    
      <div className='flex justify-center items-center bg-white p-3 md:flex-col lg:flex-row md:w-auto md:h-auto rounded-[40px]'>

        <div className="hidden lg:block relative">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }} width="0" height="0">
            <defs>
              <clipPath id="clip-shape">
                <path d="m348.62,600H30.59c-16.89,0-30.59-13.7-30.59-30.59V30.59C0,13.7,13.7,0,30.59,0h400c18.73,0,33.06,16.68,30.24,35.19l-81.98,538.82c-2.27,14.95-15.12,25.99-30.24,25.99Z"/>
              </clipPath>
            </defs>
          </svg>
          <div
          className='h-[600px] w-[465px]'
            style={{
              clipPath: 'url(#clip-shape)', // 使用這裡的形狀
            }} >
            <img 
              src={Glacier} 
              alt="Glacier" 
              className="h-full object-cover" 
            />
            
          </div>
        </div>
        <img 
          src={Glacier} 
          alt="Glacier" 
          className="w-[500px] h-60 rounded-[32px] object-cover hidden md:block lg:hidden"
        />
        <div className="w-full flex flex-col justify-center items-center px-16 my-10 lg:my-0">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">登入</h2>
          <form onSubmit={handleSubmit} className='w-72'>
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
            <button
              type="submit"
              className="w-full py-3 bg-main text-white font-semibold rounded-full hover:bg-darkmain active:scale-95 transition duration-300"
            >
              登入
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
