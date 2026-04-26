import React from 'react';
import { CategoryChip } from '../atoms/categoryChip';

export const CategoriesScroller = ({ categories, activeCategory, onCategoryClick }) => {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2 snap-x pt-2 scrollbar-hide">
            {categories.map((cat) => (
                <CategoryChip
                    key={cat}
                    label={cat}
                    isActive={activeCategory === cat}
                    onClick={() => onCategoryClick(cat)}
                />
            ))}
        </div>
    );
};