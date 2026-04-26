import React from 'react';

export const ProfileStats = ({ stats }) => {
    return (
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-6 h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Resumen de Cuenta</h2>
            <div className="grid grid-cols-2 gap-4 flex-grow">
                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-center items-center text-center group hover:bg-orange-50 transition-colors duration-300">
                    <span className="material-symbols-outlined text-orange-600 text-3xl mb-2 font-variation-fill">inventory_2</span>
                    <span className="text-2xl font-black text-gray-900 block">{stats.totalOrders}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-orange-600 transition-colors">Pedidos Totales</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-center items-center text-center group hover:bg-orange-50 transition-colors duration-300">
                    <span className="material-symbols-outlined text-orange-600 text-3xl mb-2 font-variation-fill">stars</span>
                    <span className="text-2xl font-black text-gray-900 block">{stats.points.toLocaleString()}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-orange-600 transition-colors">Puntos de Regalo</span>
                </div>
            </div>
        </section>
    );
};
