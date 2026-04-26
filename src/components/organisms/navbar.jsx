import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../atoms/logo';
import { Button } from '../atoms/button';
import { useCart } from '../../context/CartContext';

export const Navbar = () => {
    const { cartCount } = useCart();

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
                <Link to="/">
                    <Logo />
                </Link>

                <div className="flex items-center gap-6 md:gap-8 font-medium text-gray-600">
                    <Link to="/ofertas" className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-600 font-bold hover:bg-red-100 transition-all duration-300 group">
                        <span className="material-symbols-outlined text-xl animate-pulse">local_fire_department</span>
                        <span>Ofertas</span>
                        <span className="absolute -top-2 -right-1 bg-red-600 text-white text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter shadow-sm animate-bounce">Hot</span>
                    </Link>
                    <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
                    <Link to="/store" className="hover:text-orange-600 transition-colors">Catálogo</Link>
                    
                    <Link to="/carrito" className="text-gray-600 hover:text-orange-600 transition-all flex items-center gap-1 relative group">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in duration-300">
                                {cartCount}
                            </span>
                        )}
                        <span className="hidden sm:inline">Carrito</span>
                    </Link>

                    <Link to="/auth">
                        <Button variant="primary" className="px-5 py-2 rounded-full text-sm">
                            Iniciar Sesión
                        </Button>
                    </Link>

                    <Link to="/perfil" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1 border-l border-gray-100 pl-4">
                        <span className="material-symbols-outlined">person</span>
                        <span className="hidden sm:inline">Perfil</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};