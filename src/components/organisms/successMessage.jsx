import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/button';

export const SuccessMessage = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 max-w-3xl mx-auto w-full text-center px-10 gap-8 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-[56px] text-green-500 font-variation-fill">check_circle</span>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">¡Gracias por tu compra!</h1>
                <p className="text-lg text-gray-500 max-w-lg mx-auto">
                    Tu pedido ha sido recibido y está siendo procesado. Te enviaremos un correo de confirmación con los detalles del seguimiento muy pronto.
                </p>
            </div>

            <div className="bg-gray-50 py-4 px-10 rounded-2xl border border-gray-100 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Número de Pedido</span>
                <span className="text-2xl font-black text-gray-900">#TM-8492-XYZ</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                <Link to="/">
                    <Button variant="primary" className="w-full sm:px-10 py-4">
                        Volver al Inicio
                    </Button>
                </Link>
                <Button variant="outline" className="w-full sm:px-10 py-4">
                    Ver Comprobante
                </Button>
            </div>
        </section>
    );
};
