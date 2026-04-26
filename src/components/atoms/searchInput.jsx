import React from 'react';

export const SearchInput = ({ placeholder, value, onChange }) => (
    <div className="relative w-full shadow-sm rounded-full">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            search
        </span>
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full h-14 pl-12 pr-4 rounded-full border border-gray-200 bg-white text-gray-900 text-lg focus:border-orange-600 focus:ring-2 focus:ring-orange-600 focus:outline-none transition-all placeholder:text-gray-400"
        />
    </div>
);