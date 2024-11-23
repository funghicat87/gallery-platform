import React, { useState } from "react";

const PatternUpload = () => {
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("#000000");
  const [style, setStyle] = useState("default");
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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">圖紋上傳</h2>
      
      {/* 圖像上傳 */}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="pattern-upload"
        >
          上傳圖紋
        </label>
        <input
          type="file"
          id="pattern-upload"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full px-4 py-2 text-sm text-gray-700 border rounded-lg shadow-sm focus:ring focus:ring-cyan-200"
        />
      </div>

      {/* 圖像預覽 */}
      {image && (
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2 text-gray-700">圖紋預覽</h3>
          <img
            src={image}
            alt="Uploaded Pattern"
            className="w-full h-auto rounded-lg border shadow-sm"
          />
        </div>
      )}

      {/* 圖紋選項設定 */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2 text-gray-700">圖紋選項</h3>
        <div>
          <label className="block mb-2 text-gray-700">Tone數：</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-cyan-200"
          >
            <option value="1tone">1 Tone</option>
            <option value="2tone">2 Tone</option>
            <option value="3tone">3 Tone</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-700">顏色：</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-cyan-200"
          >
            <option value="red">紅</option>
            <option value="orange">橙</option>
            <option value="yellow">黃</option>
            <option value="green">綠</option>
            <option value="blue">藍</option>
            <option value="purple">紫</option>
            <option value="black">黑</option>
            <option value="gray">灰</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-700">風格：</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-cyan-200"
          >
            <option value="natural">自然</option>
            <option value="vivid">濃豔</option>
            <option value="hybrid">混血</option>
          </select>
        </div>
      </div>
      {/* 圖紋流水碼 */}
      {patternCode && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2 text-gray-700">圖紋流水碼</h3>
          <p className="px-4 py-2 bg-gray-100 border rounded-lg text-gray-800">
            {patternCode}
          </p>
        </div>
      )}
      <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
        上傳圖紋
      </button>
    </div>
  );
};

export default PatternUpload;
