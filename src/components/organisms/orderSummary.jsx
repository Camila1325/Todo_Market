import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../atoms/button';

export const OrderSummary = ({ subtotal, shipping, tax, total }) => {
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleCheckout = async () => {
        setIsProcessing(true);
        // Simular una pequeña validación o preparación del pedido
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsProcessing(false);
        navigate('/checkout');
    };

    return (
        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col gap-6 h-fit sticky top-24">
            <h3 className="text-2xl font-bold text-gray-900">Resumen del Pedido</h3>
            
            <div className="flex flex-col gap-4">
                <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                    <span>Envío</span>
                    <span className="font-semibold text-green-600">{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                    <span>Impuestos estimados</span>
                    <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                </div>
            </div>

            <div className="h-px bg-gray-100 w-full"></div>

            <div className="flex justify-between items-end">
                <span className="text-lg font-medium text-gray-900">Total</span>
                <span className="text-3xl font-black text-orange-600">${total.toFixed(2)}</span>
            </div>

            <Button 
                variant="primary" 
                className="w-full py-4 text-lg flex items-center justify-center gap-2"
                onClick={handleCheckout}
                disabled={isProcessing}
            >
                {isProcessing ? (
                    <>
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        Preparando Pago...
                    </>
                ) : (
                    'Proceder al Pago'
                )}
            </Button>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-base">lock</span>
                <span>Transacción Segura</span>
            </div>
        </div>
    );
};
