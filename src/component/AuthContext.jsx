import React, { createContext, useState } from 'react';

// 創建 AuthContext
export const AuthContext = createContext(); 

// 提供者組件
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 儲存當前登入的使用者資訊

  // 模擬登入，並設定權限角色
  const login = (username, password) => {
    // 假設有個簡單的帳號密碼驗證邏輯
    if (username === 'admin' && password === 'admin') {
      setUser('admin');
    } else if (username === 'user' && password === 'user') {
      setUser('user');
    } else {
      setUser(null);
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
