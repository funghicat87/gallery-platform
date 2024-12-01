import React, { useState } from 'react';
import { Button } from '../../component/Button';
import { InputText } from '../../component/input';
import { Select } from '../../component/Select';

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Admin', password: '123456', role: '管理員' },
    { id: 2, name: 'User1', password: 'password', role: '使用者' },
  ]);
  const SelectOptions = [
    { id:'使用者' , value:'user'},
    { id:'管理員' , value:'admin'}
  ]
  const [newAccount, setNewAccount] = useState({ name: '', password: '', role: '使用者' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountToDelete, setAccountToDelete] = useState(null);

  const [editAccount, setEditAccount] = useState(null); 
  const [editedData, setEditedData] = useState({ name: '', password: '', role: '使用者' });

  // 新增帳號
  const handleAddAccount = () => {
    if (newAccount.name.trim() === '' || newAccount.password.trim() === '') {
      alert('帳號名稱和密碼不得為空！');
      return;
    }
    const newId = Math.max(...accounts.map((a) => a.id), 0) + 1; 
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
    <div className="max-w-lg mx-auto p-10 bg-white rounded-[40px]">

      {/* 帳號列表 */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold mb-2">目前帳號</h1>
        <ul className="rounded-[40px] border divide-y px-10 py-5">
          {accounts.map((account) => (
            <li
              key={account.id}
              className="flex justify-center items-center p-4"
            >
              {editAccount === account.id ? (
                <div className="flex flex-col gap-2 w-full">
                  <InputText
                    type="text"
                    value={editedData.name}
                    onChange={(e) =>
                      setEditedData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <InputText
                    type="text"
                    value={editedData.password}
                    onChange={(e) =>
                      setEditedData((prev) => ({ ...prev, password: e.target.value }))
                    }
                  />
                  <Select
                    value={editedData.role}
                    options={SelectOptions}
                    onChange={(e) =>
                      setEditedData((prev) => ({ ...prev, role: e.target.value }))
                    }
                  />
                  <div className="flex gap-2 my-4">
                    <Button onClick={handleSaveEdit}>
                      儲存
                    </Button>
                    <Button onClick={handleCancelEdit}>
                      取消
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center w-full">
                  <div>
                    <strong>帳號：</strong>{account.name} <br />
                    <strong>密碼：</strong>{account.password} <br />
                    <strong>權限：</strong>{account.role}
                  </div>
                  <div className="flex divide-x">
                    <button 
                      onClick={() => handleEditClick(account)}
                      className='cursor-pointer hover:text-main px-4 py-2'
                    >
                      修改
                    </button>
                    <button 
                      onClick={() => handleOpenModal(account)}
                      className='cursor-pointer hover:text-main px-4 py-2'
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
      <div>
        <h2 className="text-xl font-semibold mb-4">新增帳號</h2>
        <div className="flex flex-col gap-4">
          <InputText
            type="text"
            value={newAccount.name}
            onChange={(e) =>
              setNewAccount((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="帳號"
          />
          <InputText
            type="text"
            value={newAccount.password}
            onChange={(e) =>
              setNewAccount((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="密碼"
          />            
          <Select
          value={newAccount.role}
          options={SelectOptions}
          onChange={(e) =>
            setEditedData((prev) => ({ ...prev, role: e.target.value }))
          }
          />
          <Button onClick={handleAddAccount}>
            新增
          </Button>
        </div>
      </div>

      {/* 刪除模態視窗 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-light/80 z-10]">
          <div className="bg-white rounded-[40px] p-10 max-w-sm w-full">
            <p className="mb-4 text-center">確定要刪除帳號 "{accountToDelete.name}" 嗎？</p>
            <div className="flex justify-center gap-4 mt-6">
              <Button onClick={handleDeleteAccount}>
                確定
              </Button>
              <Button onClick={handleCloseModal}>
                取消
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountManagement;
