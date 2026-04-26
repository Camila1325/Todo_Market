import React from 'react';

export const Rating = ({ score, count }) => (
    <div className="flex items-center gap-1 text-orange-500">
        <span className="material-symbols-outlined text-sm fill-current">star</span>
        <span className="text-xs font-semibold text-gray-500">
            {score} {count && `(${count})`}
        </span>
    </div>
);