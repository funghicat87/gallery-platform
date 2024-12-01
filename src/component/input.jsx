import React from 'react';

const InputText = ({ type, id, value, onChange, required, placeholder }) => {
    return (
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className="w-full p-3 mt-2 pl-5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-main"
            required={required}
            placeholder={placeholder}
        />
    );
};
const InputCheckbox = ({ id, onChange, checked, label }) => {
    return (
      <div className="inline-flex items-center">
        <label className="flex items-center cursor-pointer relative" htmlFor={id}>
          <input type="checkbox"
            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-slate-300 checked:bg-main checked:border-main"
            id={id} 
            onChange={onChange}
            checked={checked}
            />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor">
              <path
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              ></path>
            </svg>
          </span>
        </label>
        <label className="cursor-pointer ml-2 hover:text-main" htmlFor={id}>
          {label}
        </label>
      </div>
    )
}
export { InputText, InputCheckbox };
