import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../component/AuthContext';

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
    if (user === 'admin') {
    navigate('/admin-dashboard');
  } else if (user === 'user') {
    navigate('/user-dashboard');
  } else {
    setError('帳號或密碼錯誤');
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">登入</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">使用者名稱</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">密碼</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required 
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
