import React from 'react';

export const IconButton = ({ icon, onClick, className = '', active = false, fill = false }) => (
    <button
        onClick={onClick}
        type="button"
        className={`flex items-center justify-center rounded-full transition-all duration-300 shadow-sm active:scale-90
      ${active ? 'text-red-500 bg-white' : 'text-gray-400 bg-white/90 hover:text-red-500'} 
      ${className}`}
    >
        <span 
            className="material-symbols-outlined"
            style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}` }}
        >
            {icon}
        </span>
    </button>
);