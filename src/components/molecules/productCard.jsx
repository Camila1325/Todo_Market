import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/button';
import { IconButton } from '../atoms/iconButton';
import { Rating } from '../atoms/rating';

export const ProductCard = ({ product }) => {
    // Desestructuramos las propiedades del producto para que el código sea más limpio
    const { title, price, rating, count, img, sale } = product;

    return (
        <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
            <Link to="/product" className="contents">
                <div className="aspect-square bg-gray-50 w-full relative overflow-hidden">
                <img
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    src={img}
                    alt={title}
                />

                <IconButton
                    icon="favorite"
                    className="absolute top-3 right-3 h-9 w-9 bg-white/90 backdrop-blur-sm"
                />

                {sale && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm">
                        {sale}
                    </span>
                )}
            </div>

            <div className="p-4 flex flex-col grow">


                <div className="mb-2">
                    <Rating score={rating} count={count} />
                </div>

                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1 grow leading-snug">
                    {title}
                </h3>

                <div className="text-lg font-black text-gray-900 mt-2 mb-4">
                    {price}
                </div>

                <Button
                    variant="outline"
                    className="w-full py-2 text-sm border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
                >
                    <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    Añadir
                </Button>
            </div>
            </Link>
        </article>
    );
};