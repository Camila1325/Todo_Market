import React from 'react';
import { ProductCard } from '../molecules/productCard';

export const ProductGrid = ({ products, title = "Productos en Tendencia" }) => {
    return (
        <section className="flex flex-col gap-6 pt-6">
            <div className="flex justify-between items-end mb-2">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <div className="flex items-center gap-1 text-gray-500 cursor-pointer hover:text-orange-600 transition-colors">
                    <span className="text-sm font-semibold">Ordenar por: Popularidad</span>
                    <span className="material-symbols-outlined text-xl">expand_more</span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={product.id || index} product={product} />
                ))}
            </div>
        </section>
    );
};
