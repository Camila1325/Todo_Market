import React from 'react';
import { MainLayout } from '../components/templates/mainLayout';
import { OfferHero } from '../components/organisms/offerHero';
import { ProductGrid } from '../components/organisms/productGrid';

const Ofertas = () => {
    const flashSales = [
        { id: 101, title: "Pro Studio Headphones", price: "$119.00", rating: "4.9", count: "128", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000", sale: "60% OFF" },
        { id: 102, title: "Mechanical RGB Keyboard", price: "$59.99", rating: "4.7", count: "85", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000", sale: "40% OFF" },
        { id: 103, title: "Ultra Slim Smartwatch", price: "$49.50", rating: "4.5", count: "210", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000", sale: "50% OFF" },
        { id: 104, title: "Portable SSD 1TB", price: "$79.00", rating: "4.8", count: "56", img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=1000", sale: "35% OFF" }
    ];

    const techDeals = [
        { id: 201, title: "4K Action Camera", price: "$129.00", rating: "4.6", count: "42", img: "https://images.unsplash.com/photo-1526170315870-ef6897388a22?q=80&w=1000", sale: "20% OFF" },
        { id: 202, title: "Wireless Gaming Mouse", price: "$34.00", rating: "4.8", count: "156", img: "https://images.unsplash.com/photo-1527690191606-4052fd230ab4?q=80&w=1000", sale: "15% OFF" },
        { id: 203, title: "Noise Cancelling Earbuds", price: "$89.00", rating: "4.7", count: "320", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000", sale: "25% OFF" },
        { id: 204, title: "Bluetooth Desktop Speaker", price: "$45.00", rating: "4.5", count: "88", img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1000", sale: "30% OFF" }
    ];

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <OfferHero />

                <div className="space-y-16">
                    <ProductGrid 
                        title="🔥 Ofertas Flash" 
                        products={flashSales} 
                    />

                    <div className="bg-orange-600 rounded-[2.5rem] p-12 text-center text-white space-y-4">
                        <h2 className="text-4xl font-black italic tracking-tighter">Cupón Especial: TODO20</h2>
                        <p className="text-orange-100 text-lg">Usa este código al finalizar tu compra para un 20% extra en productos seleccionados.</p>
                    </div>

                    <ProductGrid 
                        title="💻 Tech Deals" 
                        products={techDeals} 
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default Ofertas;
