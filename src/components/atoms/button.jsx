import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'bg-orange-600 text-white hover:bg-orange-500 shadow-lg shadow-orange-200',
        secondary: 'bg-gray-900 text-white hover:bg-gray-800',
        outline: 'bg-white border-2 border-gray-200 text-gray-900 hover:bg-gray-50',
    };

    return (
        <button
            className={`px-6 py-3 rounded-xl font-bold transition-all active:scale-95 flex justify-center items-center gap-2 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};