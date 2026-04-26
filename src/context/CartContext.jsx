import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('todo_market_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('todo_market_favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem('todo_market_cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('todo_market_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, delta) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === productId) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const toggleFavorite = (product) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((fav) => fav.id === product.id);
            if (isFavorite) {
                return prevFavorites.filter((fav) => fav.id !== product.id);
            }
            return [...prevFavorites, product];
        });
    };

    const cartTotal = cart.reduce((total, item) => {
        // Handle price format if it's a string like "$123.00"
        const numericPrice = typeof item.price === 'string' 
            ? parseFloat(item.price.replace(/[$,]/g, '')) 
            : item.price;
        return total + numericPrice * item.quantity;
    }, 0);

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            favorites,
            addToCart,
            removeFromCart,
            updateQuantity,
            toggleFavorite,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
