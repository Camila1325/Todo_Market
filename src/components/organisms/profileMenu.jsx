import React from 'react';
import { Link } from 'react-router-dom';

export const ProfileMenu = () => {
    const menuItems = [
        { icon: 'local_shipping', label: 'Mis Pedidos', badge: '2 Activos', path: '#' },
        { icon: 'credit_card', label: 'Métodos de Pago', path: '#' },
        { icon: 'location_on', label: 'Direcciones de Envío', path: '#' },
        { icon: 'favorite', label: 'Lista de Deseos', path: '#' },
        { icon: 'security', label: 'Seguridad y Privacidad', path: '#' },
    ];

    return (
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="flex-grow">
                <ul className="divide-y divide-gray-50">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link 
                                to={item.path} 
                                className="flex items-center justify-between p-6 hover:bg-gray-50 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-gray-100 p-2 rounded-xl text-gray-400 group-hover:text-orange-600 group-hover:bg-orange-50 transition-all">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <span className="text-lg font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{item.label}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    {item.badge && (
                                        <span className="bg-orange-100 text-orange-600 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                                            {item.badge}
                                        </span>
                                    )}
                                    <span className="material-symbols-outlined text-gray-300 group-hover:text-orange-600 transition-colors">chevron_right</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Sign Out Button */}
            <div className="p-8 mt-auto border-t border-gray-50 bg-gray-50/30">
                <button className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-red-500 border border-red-100 hover:bg-red-50 transition-all active:scale-[0.98]">
                    <span className="material-symbols-outlined text-lg">logout</span>
                    Cerrar Sesión
                </button>
            </div>
        </section>
    );
};
