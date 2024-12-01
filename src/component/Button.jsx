import React from 'react';

const Button = ({ type, className, children, onClick }) => {
    return (
        <button
            type={type}
            className={`w-full max-h-12 py-3 bg-main text-white font-semibold rounded-full hover:bg-darkmain active:scale-95 transition duration-300 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export { Button }