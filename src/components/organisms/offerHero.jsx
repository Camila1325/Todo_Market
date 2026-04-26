import React, { useState, useEffect } from 'react';
import { Button } from '../atoms/button';

export const OfferHero = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 2,
        minutes: 45,
        seconds: 30
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                clearInterval(timer);
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => String(time).padStart(2, '0');

    return (
        <section className="relative rounded-[2.5rem] overflow-hidden bg-gray-900 h-[450px] flex items-center mb-12 group">
            {/* Background Image */}
            <img 
                src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2000" 
                alt="Oferta Flash" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 px-12 space-y-6 max-w-2xl">
                <div className="flex items-center gap-3">
                    <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Oferta Flash</span>
                    <div className="flex gap-2">
                        <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                            <span className="text-white font-black text-xl font-mono">{formatTime(timeLeft.hours)}</span>
                        </div>
                        <span className="text-white font-black text-xl">:</span>
                        <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                            <span className="text-white font-black text-xl font-mono">{formatTime(timeLeft.minutes)}</span>
                        </div>
                        <span className="text-white font-black text-xl">:</span>
                        <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                            <span className="text-white font-black text-xl font-mono">{formatTime(timeLeft.seconds)}</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                    Hasta <span className="text-orange-500">60% OFF</span> en Tecnología Premium
                </h1>
                
                <p className="text-gray-300 text-lg">
                    Renueva tus gadgets con los mejores precios del año. Solo por tiempo limitado o hasta agotar existencias.
                </p>

                <Button variant="danger" className="px-10 py-4 text-lg">
                    Aprovechar Ahora
                </Button>
            </div>
        </section>
    );
};
