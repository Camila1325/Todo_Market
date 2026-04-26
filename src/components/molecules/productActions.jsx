import React from 'react';
import { Button } from '../atoms/button';

export const ProductActions = () => {
    const [quantity, setQuantity] = React.useState(1);

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

            <Button className="w-full py-4 text-lg" variant="primary">
                <span className="material-symbols-outlined">shopping_cart</span>
                Añadir al Carrito
            </Button>

            <div className="flex gap-3">
                <Button variant="outline" className="flex-1 py-3 text-sm">
                    <span className="material-symbols-outlined text-xl">favorite</span>
                    Favoritos
                </Button>
                <Button variant="outline" className="flex-1 py-3 text-sm">
                    <span className="material-symbols-outlined text-xl">share</span>
                    Compartir
                </Button>
            </div>
        </div>
    );
};
