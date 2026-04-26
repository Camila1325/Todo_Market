import React from 'react';

export const CartItem = ({ item }) => {
    const { title, price, variant, image, quantity: initialQuantity } = item;
    const [quantity, setQuantity] = React.useState(initialQuantity || 1);

    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:shadow-md transition-all duration-300 group relative">
            {/* Product Image */}
            <div className="w-full sm:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-50">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Product Details */}
            <div className="flex-grow flex flex-col gap-2 w-full">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{title}</h3>
                        <p className="text-sm text-gray-500">{variant}</p>
                    </div>
                    <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between mt-auto pt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full p-1">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-sm transition-all active:scale-90"
                        >
                            <span className="material-symbols-outlined text-xl">remove</span>
                        </button>
                        <span className="w-10 text-center font-semibold text-gray-900">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-sm transition-all active:scale-90"
                        >
                            <span className="material-symbols-outlined text-xl">add</span>
                        </button>
                    </div>

                    {/* Delete Button */}
                    <button 
                        className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all active:scale-90"
                        aria-label="Remove item"
                    >
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
