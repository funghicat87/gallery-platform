import React from 'react';

const InputText = ({ type, id, value, onChange, required, placeholder }) => {
    return (
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-main"
            required={required}
            placeholder={placeholder}
        />
    );
};

export { InputText };
