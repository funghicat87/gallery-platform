import React, { useState, useContext } from 'react'
import PatternInformation from '../../utils/PatternInformation.jsx'
import { SearchBar,FiltersContext } from '../../component/SearchBar.jsx';

const OverviewPattern = () => {
  const { filteredPatterns } = useContext(FiltersContext);


  
  return (
    <div className="p-4 flex flex-row">
      <h2 className="text-2xl font-bold mb-4">圖案總覽</h2>
      <SearchBar/>
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