import React, { useState } from 'react'
import PatternInformation from '../../utils/PatternInformation.jsx'

const OverviewPattern = () => {
  // 添加篩選狀態
  const [filters, setFilters] = useState({
    code: '',
    tone: '',
    color: '',
    style: '',
    onShelf: ''
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
      (filters.code === '' || pattern.code===Number(filters.code)) &&
      (filters.tone === '' || pattern.tone === filters.tone) &&
      (filters.color === '' || pattern.color === filters.color) &&
      (filters.style === '' || pattern.style === filters.style) &&
      (filters.onShelf === '' || pattern.onShelf === (filters.onShelf === 'true'))
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
        
        <select
          value={filters.tone}
          onChange={(e) => handleFilterChange('tone', e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">所有 Tone 數</option>
          {uniqueTones.map(tone => (
            <option key={tone} value={tone}>{tone.replace('tone', ' Tone')}</option>
          ))}
        </select>

        <select
          value={filters.color}
          onChange={(e) => handleFilterChange('color', e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">所有色系</option>
          {uniqueColors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <select
          value={filters.style}
          onChange={(e) => handleFilterChange('style', e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">所有風格</option>
          {uniqueStyles.map(style => (
            <option key={style} value={style}>
              {({
                'natural': '自然',
                'vivid': '濃豔', 
                'hybrid': '混血'
              })[style] || style}
            </option>
          ))}
        </select>

        <select
          value={filters.onShelf}
          onChange={(e) => handleFilterChange('onShelf', e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">所有狀態</option>
          <option value="true">上架</option>
          <option value="false">下架</option>
        </select>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">圖紋代碼</th>
            <th className="px-4 py-2 border">鏡片圖</th>
            <th className="px-4 py-2 border">Tone數</th>
            <th className="px-4 py-2 border">色系</th>
            <th className="px-4 py-2 border">風格</th>
            <th className="px-4 py-2 border">狀態</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatterns.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-4 py-8 text-center text-gray-500 border">
                無相符的圖紋
              </td>
            </tr>
          ) : (
            filteredPatterns.map((pattern) => (
              <tr key={pattern.code}>
                <td className="px-4 py-2 border">{pattern.code.toString().padStart(3, '0')}</td>
                <td className="px-4 py-2 border">
                  <img src={pattern.image} alt={`Pattern ${pattern.code.toString().padStart(3, '0')}`} className="w-24 h-24 object-cover" />
                </td>
                <td className="px-4 py-2 border">{pattern.tone.replace('tone', ' Tone')}</td>
                <td className="px-4 py-2 border">{pattern.color}</td>
                <td className="px-4 py-2 border">
                  {({
                    'natural': '自然',
                    'vivid': '濃豔', 
                    'hybrid': '混血'
                  })[pattern.style]}
                </td>
                <td className="px-4 py-2 border">{pattern.onShelf ? "上架" : "下架"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default OverviewPattern