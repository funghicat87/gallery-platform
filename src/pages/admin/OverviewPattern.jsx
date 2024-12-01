import React, { useContext, useState } from 'react'
import { SearchBar, FiltersContext } from '../../component/SearchBar.jsx';
import { ToneOptions, ColorOptions, StyleOptions, OnShelfOptions } from '../../utils/ToneOptions.jsx'
import { UploadArea } from '../../component/UploadArea.jsx';
import { Button } from '../../component/Button.jsx';
// import { PatternUpload } from './PatternUpload.jsx'
const OverviewPattern = () => {
  const { filteredPatterns } = useContext(FiltersContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [onDeleteCode, setOnDeleteCode] = useState('');

  const getId = (value, typeOptions) => {
    const showId = typeOptions.find(option => option.value === value);
    return showId ? showId.id : value; 
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleDeleteClick = (code) => {
    setOnDeleteCode(code.toString().padStart(3, '0'))
    setIsDelete(!isDelete);
  };

  return (
    <div className="relative pb-6 flex flex-row h-full">
        {isEditing && 
          <div className='absolute w-full h-full bg-light/80 z-10'>
            <UploadArea className='absolute top-0 left-1/2 transform -translate-x-1/2' onClick={handleEditClick}/>
          </div>}
        {isDelete && (
          <div className=" absolute inset-0 flex items-center justify-center bg-light/80 z-10]">
            <div className="bg-white rounded-[40px] p-10 max-w-sm w-full">
              <p className="mb-4 text-center">確定要刪除 {onDeleteCode} 圖紋嗎？</p>
              <div className="flex justify-center gap-4 mt-6">
                <Button onClick={handleDeleteClick}>
                  確定
                </Button>
                <Button onClick={handleDeleteClick}>
                  取消
                </Button>
              </div>
            </div>
          </div>
        )}
        <SearchBar/>
        <div className="flex flex-col ml-6 w-full">
          <div className="flex pr-[30px]">
            <div className="px-4 py-2 flex-1 ml-5">圖紋代碼</div>
            <div className="px-4 py-2 flex-1">鏡片圖</div>
            <div className="px-4 py-2 flex-1">Tone數</div>
            <div className="px-4 py-2 flex-1">色系</div>
            <div className="px-4 py-2 flex-1">風格</div>
            <div className="px-4 py-2 flex-1">狀態</div>
            <div className="px-4 py-2 flex-1"></div>
          </div>
          <div className="bg-white overflow-auto rounded-[40px] divide-y">
            {filteredPatterns.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500">
                無相符的圖紋
              </div>
            ) : (
              filteredPatterns.map((pattern) => (
                <div key={pattern.code} className="flex items-center h-16">

                  <div className="px-4 py-2 flex-1 ml-5">{pattern.code.toString().padStart(3, '0')}</div>
                  <div className="px-4 py-2 flex-1 h-16">
                    <img src={pattern.image} alt={`Pattern ${pattern.code.toString().padStart(3, '0')}`} className="h-full object-cover" />
                  </div>
                  <div className="px-4 py-2 flex-1">{getId(pattern.tone, ToneOptions)}</div>
                  <div className="px-4 py-2 flex-1">{getId(pattern.color, ColorOptions)}</div>
                  <div className="px-4 py-2 flex-1">{getId(pattern.style, StyleOptions)}</div>
                  <div className="px-4 py-2 flex-1">{getId(pattern.onShelf, OnShelfOptions)}</div>
                  <div className='px-4 py-2 flex-1' >
                  <div className="flex divide-x">
                    <button 
                      onClick={handleEditClick}
                      className='cursor-pointer hover:text-main px-4 py-2'
                    >
                      修改
                    </button>
                    <button 
                      onClick={() => handleDeleteClick(pattern.code)}
                      className='cursor-pointer hover:text-main px-4 py-2'
                    >
                      刪除
                    </button>
                  </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
    </div>
  )
}

export default OverviewPattern