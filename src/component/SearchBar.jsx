import React, { createContext, useContext, useState } from 'react'
import PatternInformation from '../utils/PatternInformation.jsx'
import { InputText } from './input.jsx'

export const FiltersContext = createContext();

const ToneOption = [
  {id:'1 Tone',value:'1tone'},
  {id:'2 Tone',value:'2tone'},
  {id:'3 Tone',value:'3tone'}
]
const ColorOption = [
  {id:'紅',value:'red'},
  {id:'黃',value:'yellow'},
  {id:'綠',value:'green'},
  {id:'藍',value:'blue'},
  {id:'紫',value:'purple'},
  {id:'灰',value:'gray'},
  {id:'棕',value:'brown'}
]
const StyleOption = [
  {id:'自然',value:'natural'},
  {id:'濃豔',value:'vivid'},
  {id:'混血',value:'hybrid'},
  {id:'藍',value:'blue'},
  {id:'紫',value:'purple'},
  {id:'灰',value:'gray'},
  {id:'棕',value:'brown'}
]
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    code: '',
    tone: [],
    color: [],
    style: [],
    onShelf: ''
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
      (filters.onShelf === '' || pattern.onShelf === (filters.onShelf === 'true'))
    );
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters, handleFilterChange, filteredPatterns }}>
      { children }
    </FiltersContext.Provider>
  )
}

export const SearchBar = () => {
  const { filters, handleFilterChange, filteredPatterns } = useContext(FiltersContext);
  // 處理篩選變更
  return (
    <div className="flex flex-row">
      <div className="h-full bg-white rounded-[40px] flex flex-col gap-2">
        <InputText
          type="text"
          placeholder="搜尋圖紋代碼"
          value={filters.code}
          onChange={(e) => handleFilterChange('code', e.target.value)}
          className="border p-2 rounded"/>

        {ToneOption.map(tone => (
          <label key={tone.value} className="flex items-center">
            <input
              type="checkbox"
              checked={filters.tone.includes(tone.value)}
              onChange={(e) => {
                const newTones = e.target.checked 
                  ? [...filters.tone, tone.value] 
                  : filters.tone.filter(t => t !== tone.value);
                handleFilterChange('tone', newTones);
              }}
              className="mr-2"
            />
            {tone.id}
          </label>
        ))}
        
        {ColorOption.map(color => (
          <label key={color.value} className="flex items-center">
            <input
              type="checkbox"
              checked={filters.color.includes(color.value)}
              onChange={(e) => {
                const newColors = e.target.checked 
                  ? [...filters.color, color.value] 
                  : filters.color.filter(c => c !== color.value);
                handleFilterChange('color', newColors);
              }}
              className="mr-2"
            />
            {color.id}
          </label>
        ))}
        
        {StyleOption.map(style => (
          <label key={style.value} className="flex items-center">
            <input
              type="checkbox"
              checked={filters.style.includes(style.value)}
              onChange={(e) => {
                const newStyles = e.target.checked 
                  ? [...filters.style, style.value] 
                  : filters.style.filter(s => s !== style.value);
                handleFilterChange('style', newStyles);
              }}
              className="mr-2"
            />
            {style.id}
          </label>
        ))}
        
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.onShelf === 'true'}
            onChange={(e) => handleFilterChange('onShelf', e.target.checked ? 'true' : '')}
            className="mr-2"
          />
          上架
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.onShelf === 'false'}
            onChange={(e) => handleFilterChange('onShelf', e.target.checked ? 'false' : '')}
            className="mr-2"
          />
          下架
        </label>
        {console.log(filteredPatterns)}
      </div>
    </div>
  )
}

export default SearchBar