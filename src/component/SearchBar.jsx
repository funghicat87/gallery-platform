import React, { createContext, useContext, useState } from 'react'
import PatternInformation from '../utils/PatternInformation.jsx'
import { InputCheckbox, InputText } from './input.jsx'
import { ToneOptions, ColorOptions, StyleOptions, OnShelfOptions } from '../utils/ToneOptions.jsx'

export const FiltersContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    code: '',
    tone: [],
    color: [],
    style: [],
    onShelf: []
  });

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredPatterns = PatternInformation.filter(pattern => {
    return (
      (filters.code === '' || pattern.code===Number(filters.code)) &&
      (filters.tone.length === 0 || filters.tone.includes(pattern.tone)) &&
      (filters.color.length === 0 || filters.color.includes(pattern.color)) &&
      (filters.style.length === 0 || filters.style.includes(pattern.style)) &&
      (filters.onShelf.length === 0 || filters.onShelf.includes(pattern.onShelf))
    );
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters, handleFilterChange, filteredPatterns }}>
      { children }
    </FiltersContext.Provider>
  )
}

export const SearchBar = () => {
  const { filters, handleFilterChange } = useContext(FiltersContext);

  const Options = ({ OptionArray, type, title }) => {
    return (
      <div className="flex flex-col ml-3">
        <p className="text-xl mt-4 mb-2 font-semibold">{ title }</p>
        <div className="flex flex-col gap-1 ml-2">
          {OptionArray.map(option => (
            <InputCheckbox
              key={option.value}
              id={typeof option.value === 'boolean' ? (option.value ? 'on' : 'off') : option.value}
              onChange={(e) => {
                const newFilters = e.target.checked
                  ? [...filters[type], option.value] 
                  : filters[type].filter(t => t !== option.value)
                handleFilterChange(type, newFilters)
              }}
              checked={filters[type].includes(option.value)} 
              label={option.id}
            />
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="flex flex-col w-1/5 h-full bg-white rounded-[40px] gap-1 p-10 overflow-auto">
        <InputText
          type="text"
          placeholder="搜尋圖紋代碼"
          value={filters.code}
          onChange={(e) => handleFilterChange('code', e.target.value)}
        />
        <Options
          OptionArray={ToneOptions}
          type='tone'
          title='Tone數'
        />
        <Options
          OptionArray={ColorOptions}
          type='color'
          title='顏色'
        />
        <Options
          OptionArray={StyleOptions}
          type='style'
          title='風格'
        />
        <Options
          OptionArray={OnShelfOptions}
          type='onShelf'
          title='狀態'
        />
    </div>
  )
}

export default SearchBar