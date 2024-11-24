import React, { useState } from 'react'
import PatternInformation from '../../utils/PatternInformation.jsx'

const UserPage = () => {
  // 添加篩選狀態
  const [filters, setFilters] = useState({
    code: '',
    tone: [],
    color: [],
    style: [],
    onShelf: []
  });

  // 獲取唯一的選項值
  const uniqueTones = [...new Set(PatternInformation.map(p => p.tone))];
  const uniqueColors = [...new Set(PatternInformation.map(p => p.color))];
  const uniqueStyles = [...new Set(PatternInformation.map(p => p.style))];

  // 處理篩選變更
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
    
  };

  // 篩選邏輯
  const filteredPatterns = PatternInformation.filter(pattern => {
    return (
      (pattern.onShelf) &&
      (filters.code === '' || pattern.code===Number(filters.code)) &&
      (filters.tone.length === 0 || filters.tone.includes(pattern.tone)) &&
      (filters.color.length === 0 || filters.color.includes(pattern.color)) &&
      (filters.style.length === 0 || filters.style.includes(pattern.style)) &&
      (filters.onShelf.length === 0 || filters.onShelf.includes(pattern.onShelf))
    );
  });

  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">圖案總覽</h2>
      
      {/* 篩選控制項 */}
      <div className="mb-4 space-x-4 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="搜尋圖紋代碼"
          value={filters.code}
          onChange={(e) => handleFilterChange('code', e.target.value)}
          className="border p-2 rounded"
        />
        {/* Tone 篩選 */}
        <div>
          <h3>Tone</h3>
          {uniqueTones.map(tone => (
            <label key={tone}>
              <input
                type="checkbox"
                checked={filters.tone.includes(tone)}
                onChange={(e) => {
                  const newTones = e.target.checked
                    ? [...filters.tone, tone]
                    : filters.tone.filter(t => t !== tone);
                  handleFilterChange('tone', newTones);
                }}
              />
              {tone.replace('tone', ' Tone')}
            </label>
          ))}
        </div>

        {/* Color 篩選 */}
        <div>
          <h3>Color</h3>
          {uniqueColors.map(color => (
            <label key={color}>
              <input
                type="checkbox"
                checked={filters.color.includes(color)}
                onChange={(e) => {
                  const newColors = e.target.checked
                    ? [...filters.color, color]
                    : filters.color.filter(c => c !== color);
                  handleFilterChange('color', newColors);
                }}
              />
              {color}
            </label>
          ))}
        </div>

        {/* Style 篩選 */}
        <div>
          <h3>Style</h3>
          {uniqueStyles.map(style => (
            <label key={style}>
              <input
                type="checkbox"
                checked={filters.style.includes(style)}
                onChange={(e) => {
                  const newStyles = e.target.checked
                    ? [...filters.style, style]
                    : filters.style.filter(s => s !== style);
                  handleFilterChange('style', newStyles);
                }}
              />
              {({
                'natural': '自然',
                'vivid': '濃豔', 
                'hybrid': '混血'
              })[style] || style}
            </label>
          ))}
        </div>
      </div>
      <table className="min-w-full grid grid-cols-6 bg-white border border-gray-300">
          {filteredPatterns.length === 0 ? (
              <p colSpan="6" className="px-4 py-8 text-center text-gray-500 border">
                無相符的圖紋
              </p>
          ) : (
            filteredPatterns.map((pattern) => (
            <div className='w-24 h-24 '>
                <img src={pattern.image} alt={`Pattern ${pattern.code.toString().padStart(3, '0')}`} className="object-cover" />
            </div>
            ))
          )}

      </table>
    </div>
  )
}

export default UserPage