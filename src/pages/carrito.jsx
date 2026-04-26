import React from 'react';
import { MainLayout } from '../components/templates/mainLayout';
import { CartItem } from '../components/molecules/cartItem';
import { OrderSummary } from '../components/organisms/orderSummary';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/atoms/button';

const Carrito = () => {
    const { cart, cartTotal } = useCart();
    const navigate = useNavigate();

    const shipping = 0;
    const tax = cartTotal * 0.19; // 19% IVA (Example)
    const total = cartTotal + shipping + tax;

    if (cart.length === 0) {
        return (
            <MainLayout>
                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <div className="mb-6 flex justify-center">
                        <span className="material-symbols-outlined text-8xl text-gray-200">shopping_cart_off</span>
                    </div>
                    <h1 className="text-3xl font-black text-gray-900">Tu carrito está vacío</h1>
                    <p className="text-gray-500 mt-4 mb-10 max-w-md mx-auto">Parece que aún no has añadido nada. ¡Explora nuestra tienda y encuentra algo increíble!</p>
                    <Button 
                        variant="primary" 
                        className="px-8 py-3"
                        onClick={() => navigate('/')}
                    >
                        Volver al Inicio
                    </Button>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Tu Carrito</h1>
                    <p className="text-gray-500 mt-2">{cart.length} {cart.length === 1 ? 'producto' : 'productos'} en tu pedido</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Listado de Productos */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {cart.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Resumen del Pedido */}
                    <div className="lg:col-span-4">
                        <OrderSummary 
                            subtotal={cartTotal}
                            shipping={shipping}
                            tax={tax}
                            total={total}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Carrito;
