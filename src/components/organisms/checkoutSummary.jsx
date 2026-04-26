import React from 'react';
import { Button } from '../atoms/button';

export const CheckoutSummary = ({ items, subtotal, shipping, tax, total, onPlaceOrder }) => {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col gap-8 h-fit sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">Resumen del Pedido</h2>
            
            {/* Items List */}
            <div className="flex flex-col gap-6">
                {items.map(item => (
                    <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gray-50 flex-shrink-0 overflow-hidden border border-gray-100">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-sm font-bold text-gray-900">{item.title}</span>
                            <span className="text-xs text-gray-500">Cant: {item.quantity}</span>
                        </div>
                        <span className="ml-auto text-sm font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
            </div>

            {/* Totals */}
            <div className="flex flex-col gap-3 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Envío</span>
                    <span className="font-semibold text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Impuestos</span>
                    <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-gray-100">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-black text-orange-600">${total.toFixed(2)}</span>
                </div>
            </div>

            <Button onClick={onPlaceOrder} variant="primary" className="w-full py-4 text-lg">
                Realizar Pedido
            </Button>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-base">lock</span>
                <span>Pago 100% Seguro</span>
            </div>
        </div>
    );
};
