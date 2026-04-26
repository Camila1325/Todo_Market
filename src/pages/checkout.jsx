import React from 'react';
import { MainLayout } from '../components/templates/mainLayout';
import { CheckoutForm } from '../components/organisms/checkoutForm';
import { CheckoutSummary } from '../components/organisms/checkoutSummary';
import { SuccessMessage } from '../components/organisms/successMessage';

const Checkout = () => {
    const [isSuccess, setIsSuccess] = React.useState(false);

    // Datos demo (mismos que en carrito para consistencia)
    const items = [
        {
            id: 1,
            title: "Acoustic Pro Headphones",
            price: 299.00,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4FdcyNZEna-CW8uJTEEYQ1LYUDmP2QMGmEVJ_N_9tY5QoWn9rzrXtYJhYK30ak6GdqmmXgfEEpCprb9UO0czOLVx3fjCFW-KBtRVlcABpTy1GP3PhsTF6pb8smAmTWgKwP7Kd9Vht0Dq4GoyBvKVBMwRW3nUAVABKNYOlTp5ricedeKrV8bGB8eQl5CTkjYmYxQP5H4UOaAd7B5MIreB1Ret5K1BxjCS3atxR_LKjzRt0KphxjyIbZAstnooTijEG3SCPQUpYZTc",
            quantity: 1
        },
        {
            id: 2,
            title: "Chronos Smartwatch",
            price: 149.50,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8w7yuHZevuIRfXhC3ApqrbD21oQMDtR49njoIGoGL0oS9zAj06NMYYr_U28XXFJsJPvuxGdL_gEWTfLwXBDs2pvTFuaSUoyF8sE0i8A6yxkl9dkaH8FDTlrMVgJbEvjhHZACX5wOjGap48RTXmwI__K7FO0uxCBq0yL-3i31ZwDZz6yOYYJl9UOJLzMHl_J7IdzhT5YMm6SA3E7jL_nXjgQx503Jb7bz6Nr-yOrse6IoVYuvHGbPfEvJ4OGvrK63xLFfvJNdAgAAl",
            quantity: 2
        }
    ];

    const totals = {
        subtotal: 598.00,
        shipping: 0,
        tax: 48.50,
        total: 646.50
    };

    const handlePlaceOrder = () => {
        // Simulamos el proceso de pago
        setIsSuccess(true);
        window.scrollTo(0, 0);
    };

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-6 py-12 min-h-[70vh] flex flex-col justify-center">
                {!isSuccess ? (
                    <div className="animate-in fade-in duration-500">
                        <div className="mb-10">
                            <h1 className="text-4xl font-black text-gray-900 tracking-tight">Finalizar Compra</h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                            {/* Formularios */}
                            <div className="lg:col-span-8">
                                <CheckoutForm />
                            </div>

                            {/* Resumen */}
                            <div className="lg:col-span-4">
                                <CheckoutSummary 
                                    items={items}
                                    {...totals}
                                    onPlaceOrder={handlePlaceOrder}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <SuccessMessage />
                )}
            </div>
        </MainLayout>
    );
};

export default Checkout;
