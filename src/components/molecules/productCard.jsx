import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/button';
import { IconButton } from '../atoms/iconButton';
import { Rating } from '../atoms/rating';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ product }) => {
    const { title, price, rating, count, img, sale } = product;
    const { addToCart, toggleFavorite, favorites } = useCart();

    const isFavorite = favorites.some(fav => fav.id === product.id);

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent navigation to product page
        addToCart(product);
        // Simple visual feedback could be added here
    };

    const handleToggleFavorite = (e) => {
        e.preventDefault(); // Prevent navigation to product page
        toggleFavorite(product);
    };

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
                        onClick={handleToggleFavorite}
                        className={`absolute top-3 right-3 h-9 w-9 backdrop-blur-sm transition-all duration-300 ${
                            isFavorite 
                                ? 'text-red-500 bg-white shadow-md scale-110' 
                                : 'bg-white/90 text-gray-400 hover:text-red-500'
                        }`}
                        fill={isFavorite}
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

                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1 grow leading-snug group-hover:text-orange-600 transition-colors">
                        {title}
                    </h3>

                    <div className="text-lg font-black text-gray-900 mt-2 mb-4">
                        {typeof price === 'number' ? `$${price.toFixed(2)}` : price}
                    </div>

                    <Button
                        variant="primary"
                        className="w-full py-2 text-sm flex items-center justify-center gap-2 group/btn"
                        onClick={handleAddToCart}
                    >
                        <span className="material-symbols-outlined text-lg group-hover/btn:scale-110 transition-transform">add_shopping_cart</span>
                        Añadir
                    </Button>
                </div>
            </Link>
        </article>
    );
};