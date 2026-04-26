import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../atoms/logo';
import { Button } from '../atoms/button';

export const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
                <Link to="/">
                    <Logo />
                </Link>

                <div className="flex items-center gap-8 font-medium text-gray-600">
                    <Link to="/store" className="hover:text-orange-600 transition-colors">Catálogo</Link>
                    <Link to="/auth">
                        <Button variant="secondary" className="px-5 py-2 rounded-full text-sm">
                            Iniciar Sesión
                        </Button>
                    </Link>
                    <Link to="/carrito" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <span className="hidden sm:inline">Carrito</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};