import React from 'react';
import { Rating } from '../atoms/rating';

export const ProductInfo = ({ category, title, price, description, rating, reviews }) => {
    return (
        <div className="space-y-4">
            <div>
                <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    {category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                    {title}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                    <Rating rating={rating} />
                    <span className="text-sm text-gray-500">({reviews} reviews)</span>
                </div>
            </div>

            <div className="py-4 border-y border-gray-100">
                <div className="text-4xl font-bold text-orange-600">
                    ${price.toFixed(2)}
                </div>
                <p className="text-sm text-gray-500 mt-1">Free shipping on orders over $50.</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};
