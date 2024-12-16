import React, { useState } from "react";
import { Button } from './Button.jsx'
import { Select } from './Select.jsx'
import { ToneOptions, ColorOptions, StyleOptions, OnShelfOptions } from "../utils/ToneOptions.jsx"

const UploadArea = ({ className, onClick }) => {
  const [image, setImage] = useState(null);
  const [patternCode, setPatternCode] = useState("");

  // 處理圖像上傳
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      generatePatternCode();
    }
  };

  // 產生流水碼
  const generatePatternCode = () => {
    const sequenceNumber = String(0).padStart(6, '0');
    const code = `PATTERN-${sequenceNumber}`;
    setPatternCode(code);
  };


  return (
    <div className={`p-10 max-w-lg bg-white rounded-[40px] ${className}`}>
      {/* 圖像上傳 */}
      <div className="mb-4">
        <label
          className="text-xl mt-4 mb-2 font-semibold"
          htmlFor="pattern-upload"
        >
          選擇圖紋
        </label>
        <input
          type="file"
          id="pattern-upload"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-3 mt-2 pl-5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-main"
        />
      </div>

      {/* 圖像預覽 */}
      {image && (
        <div className="mb-4">
          <h3 className="text-xl mt-4 mb-2 font-semibold">圖紋預覽</h3>
          <img
            src={image}
            alt="Uploaded Pattern"
            className="size-40 mx-auto"
          />
        </div>
      )}

      {/* 圖紋選項設定 */}
      <div className="mb-4">
        <h3 className="text-xl mt-4 mb-2 font-semibold">圖紋選項</h3>
        <Select className='mt-2'  options={ToneOptions} title='Tone數'/>
        <Select className='mt-2'  options={ColorOptions} title='顏色'/>
        <Select className='mt-2'  options={StyleOptions} title='風格'/>
        <Select className='mt-2'  options={OnShelfOptions} title='狀態'/>
      </div> 
      {/* 圖紋流水碼 */}
      {patternCode && (
        <div className="mt-4">
          <h3 className="text-lg text-gray-700 font-semibold">圖紋流水碼</h3>
          <p className="px-4 py-2 bg-gray-100 border rounded-lg text-gray-800">
            {patternCode}
          </p>
        </div>
      )}
      <Button className='mt-4' onClick={onClick}>
        上傳圖紋
      </Button>
    </div>
  );
};

export { UploadArea } ;
