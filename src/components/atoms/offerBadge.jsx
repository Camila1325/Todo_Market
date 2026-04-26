import React from 'react';

export const OfferBadge = ({ discount }) => {
    return (
        <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-red-200/50 animate-bounce">
            -{discount}%
        </span>
    );
};
