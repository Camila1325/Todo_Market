import React from 'react';

export const Logo = ({ size = 'text-2xl' }) => (
    <div className="flex items-center gap-2">
        <div className="bg-orange-600 p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white text-xl">shopping_bag</span>
        </div>
        <span className={`${size} font-bold tracking-tight text-gray-900`}>Todo Market</span>
    </div>
);