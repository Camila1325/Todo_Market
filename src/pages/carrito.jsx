import React from 'react';
import { MainLayout } from '../components/templates/mainLayout';
import { CartItem } from '../components/molecules/cartItem';
import { OrderSummary } from '../components/organisms/orderSummary';

const Carrito = () => {
    // Datos demo extraídos del diseño de Stitch
    const cartItems = [
        {
            id: 1,
            title: "Acoustic Pro Headphones",
            price: 299.00,
            variant: "Matte Black • Wireless",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4FdcyNZEna-CW8uJTEEYQ1LYUDmP2QMGmEVJ_N_9tY5QoWn9rzrXtYJhYK30ak6GdqmmXgfEEpCprb9UO0czOLVx3fjCFW-KBtRVlcABpTy1GP3PhsTF6pb8smAmTWgKwP7Kd9Vht0Dq4GoyBvKVBMwRW3nUAVABKNYOlTp5ricedeKrV8bGB8eQl5CTkjYmYxQP5H4UOaAd7B5MIreB1Ret5K1BxjCS3atxR_LKjzRt0KphxjyIbZAstnooTijEG3SCPQUpYZTc",
            quantity: 1
        },
        {
            id: 2,
            title: "Chronos Smartwatch",
            price: 149.50,
            variant: "Alpine White • 42mm",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8w7yuHZevuIRfXhC3ApqrbD21oQMDtR49njoIGoGL0oS9zAj06NMYYr_U28XXFJsJPvuxGdL_gEWTfLwXBDs2pvTFuaSUoyF8sE0i8A6yxkl9dkaH8FDTlrMVgJbEvjhHZACX5wOjGap48RTXmwI__K7FO0uxCBq0yL-3i31ZwDZz6yOYYJl9UOJLzMHl_J7IdzhT5YMm6SA3E7jL_nXjgQx503Jb7bz6Nr-yOrse6IoVYuvHGbPfEvJ4OGvrK63xLFfvJNdAgAAl",
            quantity: 2
        }
    ];

    const subtotal = 598.00;
    const shipping = 0;
    const tax = 48.50;
    const total = 646.50;

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Tu Carrito</h1>
                    <p className="text-gray-500 mt-2">{cartItems.length} productos en tu pedido</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Listado de Productos */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Resumen del Pedido */}
                    <div className="lg:col-span-4">
                        <OrderSummary 
                            subtotal={subtotal}
                            shipping={shipping}
                            tax={tax}
                            total={total}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Carrito;
