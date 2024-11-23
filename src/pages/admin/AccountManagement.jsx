import React, { useState } from 'react';

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Admin', password: '123456', role: '管理員' },
    { id: 2, name: 'User1', password: 'password', role: '使用者' },
  ]);

  const [newAccount, setNewAccount] = useState({ name: '', password: '', role: '使用者' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountToDelete, setAccountToDelete] = useState(null);

  const [editAccount, setEditAccount] = useState(null); // 編輯狀態
  const [editedData, setEditedData] = useState({ name: '', password: '', role: '使用者' });

  // 新增帳號
  const handleAddAccount = () => {
    if (newAccount.name.trim() === '' || newAccount.password.trim() === '') {
      alert('帳號名稱和密碼不得為空！');
      return;
    }
    const newId = Math.max(...accounts.map((a) => a.id), 0) + 1; // 確保 id 唯一性
    setAccounts([...accounts, { ...newAccount, id: newId }]);
    setNewAccount({ name: '', password: '', role: '使用者' });
  };

  // 開啟刪除模態視窗
  const handleOpenModal = (account) => {
    setAccountToDelete(account);
    setIsModalOpen(true);
  };

  // 確認刪除帳號
  const handleDeleteAccount = () => {
    setAccounts(accounts.filter((account) => account.id !== accountToDelete.id));
    setAccountToDelete(null);
    setIsModalOpen(false);
  };

  // 取消刪除
  const handleCloseModal = () => {
    setAccountToDelete(null);
    setIsModalOpen(false);
  };

  // 開啟編輯模式
  const handleEditClick = (account) => {
    setEditAccount(account.id);
    setEditedData(account);
  };

  // 儲存修改
  const handleSaveEdit = () => {
    setAccounts(
      accounts.map((account) =>
        account.id === editAccount ? { ...editedData } : account
      )
    );
    setEditAccount(null);
  };

  // 取消編輯
  const handleCancelEdit = () => {
    setEditAccount(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">帳號管理</h1>

      {/* 帳號列表 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">目前帳號</h2>
        <ul className="space-y-2">
          {accounts.map((account) => (
            <li
              key={account.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              {editAccount === account.id ? (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={editedData.name}
                    onChange={(e) =>
                      setEditedData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    value={editedData.password}
                    onChange={(e) =>
                      setEditedData((prev) => ({ ...prev, password: e.target.value }))
                    }
                    className="p-2 border rounded"
                  />
                  <select
                    value={editedData.role}
                    onChange={(e) =>
                      setEditedData((prev) => ({ ...prev, role: e.target.value }))
                    }
                    className="p-2 border rounded"
                  >
                    <option value="使用者">使用者</option>
                    <option value="管理員">管理員</option>
                  </select>
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveEdit}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      儲存
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-500 text-white px-3 py-1 rounded"
                    >
                      取消
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center w-full">
                  <div>
                    <strong>名稱：</strong>{account.name} <br />
                    <strong>密碼：</strong>{account.password} <br />
                    <strong>權限：</strong>{account.role}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(account)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      修改
                    </button>
                    <button
                      onClick={() => handleOpenModal(account)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      刪除
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 新增帳號 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">新增帳號</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={newAccount.name}
            onChange={(e) =>
              setNewAccount((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="輸入帳號名稱"
            className="p-2 border rounded"
          />
          <input
            type="text"
            value={newAccount.password}
            onChange={(e) =>
              setNewAccount((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="輸入密碼"
            className="p-2 border rounded"
          />
          <select
            value={newAccount.role}
            onChange={(e) =>
              setNewAccount((prev) => ({ ...prev, role: e.target.value }))
            }
            className="p-2 border rounded"
          >
            <option value="使用者">使用者</option>
            <option value="管理員">管理員</option>
          </select>
          <button
            onClick={handleAddAccount}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            新增
          </button>
        </div>
      </div>

      {/* 刪除模態視窗 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">確認刪除</h3>
            <p className="mb-4">確定要刪除帳號 "{accountToDelete.name}" 嗎？</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                確定
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountManagement;
