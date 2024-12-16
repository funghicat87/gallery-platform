import React, { useContext, useState } from 'react'
import { SearchBar, FiltersContext } from '../../component/SearchBar.jsx';
import { ToneOptions, ColorOptions, StyleOptions, OnShelfOptions } from '../../utils/ToneOptions.jsx'
import { UploadArea } from '../../component/UploadArea.jsx';
import { Button } from '../../component/Button.jsx';

const UserPage = () => {const { filteredPatterns } = useContext(FiltersContext);
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
  <div className="relative pb-6 flex flex-col lg:flex-row h-full">
      <SearchBar ShowOnShelf/>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6 lg:mt-0 lg:ml-6 w-full bg-white overflow-auto rounded-[40px] p-10">
        {filteredPatterns.length === 0 ? (
          <div className="px-4 py-8 text-center text-gray-500 col-span-4">
            無相符的圖紋
          </div>
        ) : (
          filteredPatterns.map((pattern) => (
            <div key={pattern.code} className='border rounded-3xl sm:rounded-[40px] p-2 md:p-3 2xl:p-6 aspect-square'>
              <img src={pattern.image} alt={`Pattern ${pattern.code.toString().padStart(3, '0')}`} className="object-cover" />
            </div>
          ))
        )}
      </div>
  </div>
)
}

export default UserPage