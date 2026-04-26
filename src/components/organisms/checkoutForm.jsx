import React from 'react';
import { Input } from '../atoms/input';

export const CheckoutForm = () => {
    const [paymentMethod, setPaymentMethod] = React.useState('card');

    return (
        <div className="flex flex-col gap-10">
            {/* Progress Stepper (Visual) */}
            <div className="flex items-center gap-4 px-2">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600 font-variation-fill">check_circle</span>
                    <span className="text-sm font-bold text-gray-900">Carrito</span>
                </div>
                <div className="h-px bg-gray-200 flex-grow max-w-[40px]"></div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-sm font-bold text-gray-900">Envío y Pago</span>
                </div>
            </div>

            {/* Shipping Address */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-600">local_shipping</span>
                    Dirección de Envío
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Nombre" placeholder="Juan" />
                    <Input label="Apellido" placeholder="Pérez" />
                    <div className="md:col-span-2">
                        <Input label="Dirección" placeholder="Calle 123 #45-67, Apto 101" />
                    </div>
                    <Input label="Ciudad" placeholder="Medellín" />
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Departamento" placeholder="Antioquia" />
                        <Input label="Código Postal" placeholder="050001" />
                    </div>
                </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-600">credit_card</span>
                    Método de Pago
                </h2>

                <div className="flex flex-col gap-6">
                    {/* Payment Toggles */}
                    <div className="flex gap-4 p-1 bg-gray-50 rounded-xl border border-gray-100">
                        <button 
                            onClick={() => setPaymentMethod('card')}
                            className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                                paymentMethod === 'card' 
                                ? 'bg-white text-gray-900 shadow-sm border border-gray-100' 
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <span className="material-symbols-outlined text-lg">credit_card</span>
                            Tarjeta
                        </button>
                        <button 
                            onClick={() => setPaymentMethod('paypal')}
                            className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                                paymentMethod === 'paypal' 
                                ? 'bg-white text-gray-900 shadow-sm border border-gray-100' 
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                            PayPal
                        </button>
                    </div>

                    {/* Card Details */}
                    {paymentMethod === 'card' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="md:col-span-2">
                                <div className="relative">
                                    <Input label="Número de Tarjeta" placeholder="0000 0000 0000 0000" />
                                    <span className="material-symbols-outlined absolute right-4 bottom-3 text-gray-400">credit_score</span>
                                </div>
                            </div>
                            <Input label="Fecha de Expiración" placeholder="MM/YY" />
                            <Input label="CVC" placeholder="123" />
                        </div>
                    )}

                    {paymentMethod === 'paypal' && (
                        <div className="py-10 text-center flex flex-col items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            <img src="https://www.vectorlogo.zone/logos/paypal/paypal-ar21.svg" alt="PayPal" className="h-10" />
                            <p className="text-sm text-gray-500">Serás redirigido a PayPal para completar tu compra de forma segura.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
