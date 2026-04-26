import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../atoms/logo';
import { Button } from '../atoms/button';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { logout } from '../../back/auth';

export const Navbar = () => {
    const { cartCount } = useCart();
    const { user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Catálogo', path: '/store' },
        { name: 'Ofertas', path: '/ofertas', highlight: true },
        { name: 'Carrito', path: '/carrito', showCart: true },
    ];

    const handleLogout = async () => {
        await logout();
        window.location.reload();
    };

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="flex justify-between items-center px-6 md:px-8 py-5 max-w-7xl mx-auto">
                <Link to="/">
                    <Logo />
                </Link>

                <div className="flex items-center gap-4 md:gap-8 font-medium text-gray-600">
                    <Link to="/ofertas" className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-600 font-bold hover:bg-red-100 transition-all duration-300 group">
                        <span className="material-symbols-outlined text-xl animate-pulse">local_fire_department</span>
                        <span className="hidden xs:inline text-xs md:text-sm">Ofertas</span>
                        <span className="absolute -top-2 -right-1 bg-red-600 text-white text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter shadow-sm animate-bounce">Hot</span>
                    </Link>

                    <Link to="/" className="hidden md:inline hover:text-orange-600 transition-colors">Home</Link>
                    <Link to="/store" className="hidden md:inline hover:text-orange-600 transition-colors">Catálogo</Link>

                    <Link to="/carrito" className="hidden md:flex text-gray-600 hover:text-orange-600 transition-all items-center gap-1 relative group">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in duration-300">
                                {cartCount}
                            </span>
                        )}
                        <span className="hidden sm:inline">Carrito</span>
                    </Link>

                    {user ? (
                        <div className="hidden md:flex items-center gap-4 border-l border-gray-100 pl-4">
                            <Link to="/perfil" className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors border border-gray-100 group/user">
                                <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-xs uppercase group-hover/user:scale-110 transition-transform">
                                    {user.displayName ? user.displayName.charAt(0) : user.email.charAt(0)}
                                </div>
                                <span className="text-sm font-bold text-gray-900 truncate max-w-[120px]">
                                    {user.displayName || 'Mi Cuenta'}
                                </span>
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors uppercase tracking-wider"
                            >
                                Salir
                            </button>
                        </div>
                    ) : (
                        <Link to="/auth" className="hidden md:inline">
                            <Button variant="primary" className="px-5 py-2 rounded-full text-sm">
                                Iniciar Sesión
                            </Button>
                        </Link>
                    )}

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl md:hidden flex flex-col"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-gray-50">
                                <Logo size="text-xl" />
                                <button onClick={toggleMenu} className="p-2 text-gray-400 hover:text-gray-600">
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            <div className="flex flex-col p-6 gap-4 overflow-y-auto flex-grow">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={toggleMenu}
                                        className={`flex items-center justify-between p-4 rounded-2xl transition-all ${link.highlight
                                                ? 'bg-red-50 text-red-600 font-bold'
                                                : 'text-gray-700 hover:bg-gray-50 font-semibold'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined">
                                                {link.name === 'Home' ? 'home' :
                                                    link.name === 'Catálogo' ? 'storefront' :
                                                        link.name === 'Ofertas' ? 'local_fire_department' :
                                                            'shopping_cart'}
                                            </span>
                                            {link.name}
                                        </div>
                                        {link.showCart && cartCount > 0 && (
                                            <span className="bg-orange-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                                                {cartCount}
                                            </span>
                                        )}
                                    </Link>
                                ))}
                            </div>

                            <div className="p-6 mt-auto border-t border-gray-50">
                                {user ? (
                                    <div className="flex flex-col gap-4">
                                        <Link 
                                            to="/perfil" 
                                            onClick={toggleMenu}
                                            className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
                                                {user.displayName ? user.displayName.charAt(0) : user.email.charAt(0)}
                                            </div>
                                            <div className="flex flex-col overflow-hidden">
                                                <span className="text-sm font-bold text-gray-900 truncate">{user.displayName || 'Usuario'}</span>
                                                <span className="text-[10px] text-gray-500 truncate">{user.email}</span>
                                            </div>
                                            <span className="material-symbols-outlined ml-auto text-gray-400">chevron_right</span>
                                        </Link>
                                        <button 
                                            onClick={handleLogout}
                                            className="w-full py-4 rounded-2xl bg-red-50 text-red-600 font-bold text-sm hover:bg-red-100 transition-colors"
                                        >
                                            Cerrar Sesión
                                        </button>
                                    </div>
                                ) : (
                                    <Link to="/auth" onClick={toggleMenu}>
                                        <Button variant="primary" className="w-full py-4 rounded-2xl">
                                            Iniciar Sesión
                                        </Button>
                                    </Link>
                                )}
                                <p className="mt-4 text-center text-xs text-gray-400">&copy; 2026 Todo Market</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};
