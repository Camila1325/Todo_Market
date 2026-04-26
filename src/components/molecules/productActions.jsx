import React from 'react';
import { Button } from '../atoms/button';
import { useCart } from '../../context/CartContext';

export const ProductActions = ({ product }) => {
    const [quantity, setQuantity] = React.useState(1);
    const { addToCart, toggleFavorite, favorites } = useCart();

    const isFavorite = product ? favorites.some(fav => fav.id === product.id) : false;

    const handleAddToCart = () => {
        if (!product) return;
        // Logic to add multiple items if needed, but Context handles single add
        // We could extend addToCart to accept quantity
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        alert('Producto añadido al carrito');
    };

    const handleToggleFavorite = () => {
        if (product) toggleFavorite(product);
    };

    return (
        <div className="space-y-4 pt-4 mt-auto">
            <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">Cantidad</label>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                    >
                        <span className="material-symbols-outlined text-xl">remove</span>
                    </button>
                    <div className="w-12 h-12 flex items-center justify-center font-bold text-gray-900 border-x border-gray-100">
                        {quantity}
                    </div>
                    <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                    >
                        <span className="material-symbols-outlined text-xl">add</span>
                    </button>
                </div>
            </div>

            <Button 
                className="w-full py-4 text-lg" 
                variant="primary"
                onClick={handleAddToCart}
            >
                <span className="material-symbols-outlined">shopping_cart</span>
                Añadir al Carrito
            </Button>

            <div className="flex gap-3">
                <Button 
                    variant="outline" 
                    className={`flex-1 py-3 text-sm transition-all duration-300 ${isFavorite ? 'text-red-500 border-red-200 bg-red-50/50' : ''}`}
                    onClick={handleToggleFavorite}
                >
                    <span 
                        className="material-symbols-outlined text-xl"
                        style={{ fontVariationSettings: `'FILL' ${isFavorite ? 1 : 0}` }}
                    >
                        favorite
                    </span>
                    {isFavorite ? 'En Favoritos' : 'Favoritos'}
                </Button>
                <Button variant="outline" className="flex-1 py-3 text-sm">
                    <span className="material-symbols-outlined text-xl">share</span>
                    Compartir
                </Button>
            </div>
        </div>
    );
};
