import React from 'react';

export const CategoryChip = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`snap-start shrink-0 px-6 py-2 rounded-full font-semibold border transition-all duration-300
      ${isActive
                ? 'bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-200'
                : 'bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200'
            }`}
    >
        {label}
    </button>
);